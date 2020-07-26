/* 
  LIBRARIES
*/
const express = require('express');
const bodyParser = require('body-parser');


/* 
  GLOBAL DECLARATIONS
*/
_ = require('lodash')

const config = require('./config');
app_constants = config.constants


/* 
  SERVER
*/
const app = express();


/* 
  MIDDLEWARES
*/
const logger = require('./app/middlewares/Logger.js');

//-- Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(logger);


/* 
  ROUTES
*/
require('./config/routes.js')(app);


/* 
  START SERVER
*/
app.listen(config.port, () => {
  console.log('Server is running on ' + config.port);
});