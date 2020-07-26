const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// const cors = require('cors');


//-- Server configurations
const config = require('./config');
const environment = process.env.NODE_ENV;
// console.log(config);

const app = express();

//-- Allow cross origin requests
// app.use(cors());

//-- Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//-- Include routes folder for app routing
require('./config/routes.js')(app);

//-- Start listening
app.listen(config.port, () => {
  console.log('Server is running on ' + config.port);
});