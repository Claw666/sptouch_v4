var mongoose = require('mongoose');

// todo model
var meetingSchema = mongoose.Schema ({
  meetname: {
    type: String
  },
  meetbuilding: {
    type: String
  },
  meetroom: {
    type: String
  }
});

var Meeting = module.exports = mongoose.model('Meeting', meetingSchema);

