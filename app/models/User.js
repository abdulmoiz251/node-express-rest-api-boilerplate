const mongoose = require('mongoose');

//-- Setup schema
var UserSchema = mongoose.Schema({
  name: {type: String, required: true, max: 100},
  email: {type: String, required: true, max: 200},
  gender: {type: String, required: true, max: 500},
  active: {type: Boolean, required: true}
});

//-- Export the model
module.exports = mongoose.model('User', UserSchema);
