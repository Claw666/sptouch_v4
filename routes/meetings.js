var express = require('express');
var router = express.Router();
var path = require('path');


var Todo = require('../models/Todo');


/* GET home page. */

router.get('/', ensureAuthenticated, function(req, res, next) {
   Todo.find({ meetname: { $ne: null } }).sort({meetname: 1}).exec(function(err, todos){
        if(err) res.render('error', { error: 'Could not fetch items from database :('});
        res.render('meetings', { todos: todos, title: 'Meeting Rooms' });
    });
});

router.post('/create', function(req, res, next) {
    var meetContent = req.body.meetname;
    var meetBuilding = req.body.meetbuilding;
    var meetRoom = req.body.meetroom;
    // create meeting room
    Todo.create({ meetname: meetContent, compbuilding: meetBuilding, comproom: meetRoom}, function(err, todo){
        if(err) res.render('error', { error: 'Error creating your todo :('})
        // reload collection
        req.flash('success', 'You added a new meeting room to the wayfinding!');
    res.redirect('/meetings');
    });
});

router.post('/destroy/:id' ,function(req, res, next) {
    var id = req.params.id;

    Todo.findByIdAndRemove(id, function(err, todo){
        if(err) res.render('error', { error: 'Error deleting meeting room'});
        req.flash('error', 'You deleted a meeting room from the wayfinding!');
        res.redirect('/meetings');
    });
});

function ensureAuthenticated(req, res, next){
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect('/users/login');
}

module.exports = router;
