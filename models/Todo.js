var mongoose = require('mongoose');

// todo model
var todoSchema = mongoose.Schema ({
  compname: {
    type: String
  },
  compemail: {
    type: String
  },
  compphone: {
    type: String
  },
  compbuilding: {
    type: String
  },
  comproom: {
    type: String
  },
  complogo: {
    type: String
  },
  meetname: {
    type: String
  }
});


var Todo = module.exports = mongoose.model('Todo', todoSchema);

