var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var path = require('path');  
var multer = require('multer');

//require fs to delete image on update
const fs= require("fs");

//Set Storage Engine
var storageLogo = multer.diskStorage({
  destination: './public/uploads/logos',
  filename: function(req, file, cb){
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
}
});
var upload = multer({storage: storageLogo});

var Todo = require('../models/Todo');

router.get('/', ensureAuthenticated, function(req, res, next) {
    Todo.find({ compname: { $ne: null } }).sort({compname: 1}).exec(function(err, todos){
        if(err) res.render('error', { error: 'Could not fetch items from database :('});
        res.render('todos', { todos: todos, title: 'Companies' });
    });
});

router.get('/create', ensureAuthenticated, function(req, res, next) {
    res.render('addtodo', {title: 'AddCompanies'});
});

router.get('/maps', ensureAuthenticated, function(req, res, next) {
    res.render('maps', {title: 'Maps'});
});

router.get('/:id', ensureAuthenticated, function(req, res, next) {
    Todo.find({ _id: req.params.id }, function(err, todo){
        res.render('todo', { todo: todo[0] })
    });
});

router.post('/create', upload.single('complogo'), function(req, res, next) {
    var todoContent = req.body.compname;
    var todoEmail = req.body.compemail;
    var todoPhone = req.body.compphone;
    var todoBuilding = req.body.compbuilding;
    var todoRoom = req.body.comproom;
    if(req.file){
        console.log('Uploading File...');
        console.log(req.file.originalname);
        var complogo = req.file.filename;
    } else {
        console.log('No File Uploaded...');
        console.log(req.file);
        var complogo = 'noimage.jpg';
    }
    // create todo
    Todo.create({ compname: todoContent, compemail: todoEmail, compphone: todoPhone, compbuilding: todoBuilding, comproom: todoRoom, complogo: complogo}, function(err, todo){
        if(err) res.render('error', { error: 'Error creating your todo :('})
        // reload collection
    req.flash('success', 'You added a new company to the wayfinding!');
    res.redirect('/todos');
});
});

router.post('/destroy/:id' ,function(req, res, next) {
    var id = req.params.id;

    Todo.findByIdAndRemove(id, function(err, todo){
        if(err) res.render('error', { error: 'Error deleting todo'});
        req.flash('error', 'You deleted a company from the wayfinding!');
        res.redirect('/todos');
    });
});

router.post('/edit/:id',  upload.single('complogo'), function(req, res, next) {
    var newcompname = req.body.compname;
    var newcompemail = req.body.compemail;
    var newcompphone = req.body.compphone;
    var newcompbuilding = "";
    var newcomproom = req.body.comproom;
    var hidden = req.body.hidden;
    var hiddenbuilding = req.body.hiddenbuilding;
    var complogo = "";
    if(req.body.compbuilding == undefined){
        var newcompbuilding = hiddenbuilding;
    } else {
        var newcompbuilding = req.body.compbuilding;
    }

    //if the file input comes as undefined
    if(req.file == undefined){
        //set the data to the hidden input which is the already uploaded logo
        var complogo = hidden;
    }
    else {
        //else set the value to the new logo
        var complogo = req.file.filename;

        //delete the previous logo here
        var filePath = "./public/uploads/logos/" + hidden;
        fs.unlink(filePath, (err)=>{
           if (err) throw err;
       });
    } 
    Todo.findOneAndUpdate({ _id: req.params.id }, {compname: newcompname, compemail: newcompemail, compphone: newcompphone, compbuilding: newcompbuilding, comproom: newcomproom, complogo: complogo}, function(err, todo){
        req.flash('success', 'You modified the company!');
        res.redirect('/todos');
    });
});


function ensureAuthenticated(req, res, next){
  if(req.isAuthenticated()){
    return next();
}
res.redirect('/users/login');
}

module.exports = router;