const constants = require('./constants.js');
const mongoose = require('mongoose');


let config = {
  port: process.env.PORT || '1337',
}


//-- Connect db
mongoose.connect('mongodb://localhost/project1', { useNewUrlParser: true });


//-- Set environment wise config (if any)
switch (process.env.NODE_ENV) {
  case 'production':
    config.port = process.env.PORT || '1338'
    // mongoose.connect('mongodb://localhost/db-production', {useNewUrlParser: true});
    break;

  case 'staging':
    // mongoose.connect('mongodb://localhost/db-staging', {useNewUrlParser: true});
    break;
  
  default: //-- development
    // mongoose.connect('mongodb://localhost/db-development', {useNewUrlParser: true});
    break;
}

module.exports = { ...config, constants };