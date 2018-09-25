var mongoose = require('mongoose');

// Company Schema
var CompanySchema = mongoose.Schema({
  compname: {
    type: String,
    index: true
  },
  compemail: {
    type: String
  },
  compimage:{
    type: String
  }
});

var Company = module.exports = mongoose.model('Company', CompanySchema);

module.exports.createCompany = function(newCompany, callback){
  newCompany.save(callback);
}