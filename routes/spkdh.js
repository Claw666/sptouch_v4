var express = require('express');
var router = express.Router();
var path = require('path');
var mongoose = require('mongoose');
var Todo = require('../models/Todo');

/* GET home page. */
router.get('/', function(req, res, next) {
   res.sendFile(path.join(__dirname, '../views', 'sp2vr', 'spkdh.html'));
});

router.get('/sort-group-all', function(req,res){
    Todo.find(function(err, todos){
        res.json(todos);
    });
});

router.get('/sort-group-1', function(req,res){
    Todo.find({
        $or: [
        {"compname": {$regex: /^a/, $options: 'i'}},
        {"compname": {$regex: /^b/, $options: 'i'}},
        {"compname": {$regex: /^c/, $options: 'i'}},
        {"compname": {$regex: /^d/, $options: 'i'}},
        {"compname": {$regex: /^e/, $options: 'i'}}
        ]
        }).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/sort-group-2', function(req,res){
    Todo.find({
        $or: [
        {"compname": {$regex: /^f/, $options: 'i'}},
        {"compname": {$regex: /^g/, $options: 'i'}},
        {"compname": {$regex: /^h/, $options: 'i'}},
        {"compname": {$regex: /^i/, $options: 'i'}},
        {"compname": {$regex: /^k/, $options: 'i'}},
        {"compname": {$regex: /^l/, $options: 'i'}}
        ]
    }).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/sort-group-3', function(req,res){
    Todo.find({
        $or: [
        {"compname": {$regex: /^m/, $options: 'i'}},
        {"compname": {$regex: /^n/, $options: 'i'}},
        {"compname": {$regex: /^o/, $options: 'i'}},
        {"compname": {$regex: /^p/, $options: 'i'}},
        {"compname": {$regex: /^q/, $options: 'i'}},
        {"compname": {$regex: /^r/, $options: 'i'}}
        ]
    }).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/sort-group-4', function(req,res){
    Todo.find({
        $or: [
        {"compname": {$regex: /^s/, $options: 'i'}},
        {"compname": {$regex: /^t/, $options: 'i'}},
        {"compname": {$regex: /^u/, $options: 'i'}},
        {"compname": {$regex: /^v/, $options: 'i'}},
        {"compname": {$regex: /^w/, $options: 'i'}},
        {"compname": {$regex: /^x/, $options: 'i'}},
        {"compname": {$regex: /^y/, $options: 'i'}},
        {"compname": {$regex: /^z/, $options: 'i'}}
        ]
    }).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

router.get('/sort-group-5', function(req,res){
    Todo.find({
        $or: [
        {"compname": {$regex: /^0/, $options: 'i'}},
        {"compname": {$regex: /^1/, $options: 'i'}},
        {"compname": {$regex: /^2/, $options: 'i'}},
        {"compname": {$regex: /^3/, $options: 'i'}},
        {"compname": {$regex: /^4/, $options: 'i'}},
        {"compname": {$regex: /^5/, $options: 'i'}},
        {"compname": {$regex: /^6/, $options: 'i'}},
        {"compname": {$regex: /^7/, $options: 'i'}},
        {"compname": {$regex: /^8/, $options: 'i'}},
        {"compname": {$regex: /^9/, $options: 'i'}}
        ]
    }).sort({compname: 1}).exec(function(err, todos){
        res.json(todos);
    });
});

module.exports = router;
