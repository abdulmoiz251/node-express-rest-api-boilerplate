# node-express-rest-api-boilerplate
Node.js rest api and project boilerplate (mvc structure) using Express.js framework

## Getting Started
Clone the repository to your computer  
`$ git clone https://github.com/abdulmoiz251/node-express-rest-api-boilerplate.git`

Enter in project directory  
`$ cd node-express-rest-api-boilerplate`

Install dependencies  
`$ npm install`

Start the project  
`$ npm start`  
-OR-  
`$ node app.js` 

## Project Structure
**project_root**   
|  
|_ _ **app**  
|_ _ |_ _ **controllers**  
|_ _ |_ _ |_ _ UserController.js   
|_ _ |_ _ **middlewares**  
|_ _ |_ _ |_ _ error.js  
|_ _ |_ _ |_ _ logger.js   
|_ _ |_ _ **models**  
|_ _ |_ _ |_ _ User.js   
|_ _ |_ _ **services**  
|_ _ |_ _ |_ _ DatabaseService.js   
|  
|_ _ **config**  
|_ _ |_ _ constants.js  
|_ _ |_ _ index.js  
|_ _ |_ _ routes.js  
|  
|_ _ **public**  
|_ _ |_ _ css  
|_ _ |_ _ images  
|_ _ |_ _ js  
|  
|_ _ **views**  
|_ _ |_ _ **user**  
|_ _ |_ _ |_ _ index.ejs  
    
## Controllers
Controllers are added directly in `api/controller` folder with the naming convention `ModelnameController`.  
Example controller..
```
const User = require('../models/User');


module.exports = {

  // Get all users from DB
  // GET /api/users
  getAll: async (req, res) => {
    let users = await User.find({})
    res.send(users)
  },


  // Get users w.r.t id from DB
  // GET /api/users/:id
  get: async (req, res) => {
    let user = await User.findById(req.params.id)
    res.send(user);
  },


  // Create new User in DB
  // POST /api/users/create
  create: async (req, res) => {
    let newUser = new User(
      {
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        active: true
      }
    );

    let user = await newUser.save()
    res.send({ message: 'User created successfully!', data: user });
  },


  // Update User w.r.t id from DB
  // PUT /api/users/update/:id
  update: async (req, res) => {
    let user = await User.findByIdAndUpdate(req.params.id, {$set: req.body})
    res.send({ message: 'User updated successfully!', data: user });
  },


  // Delete User w.r.t id from DB
  // DELETE /api/users/delete/:id
  delete: async (req, res) => {
    await User.findByIdAndRemove(req.params.id)
    res.send('User deleted successfully!');
  },

};
```  
  
## Middlewares
Middlewares are added directly in `api/middlewares` folder. Middleware are functions that have access to the request object, the response object and the next function in the application's request-response cycle.  
Example middleware.. 
```

module.exports = (err, req, res, next) => {

  console.log('Error middleware');
  console.log(err.stack);

  res.status(500).send('Something went wrong!')
  
};
```
  
## Models
Models are added directly in `api/models` folder with the naming convention `Modelname`.  
Example model..  
```
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
```
    
## Views
Views are design/html files for the application and are added directly in `views` folder with the naming convention `views/Modelname/views.ejs`. Views folder will contain folder for each model, that will contain views for that model.  

|_ _ **views**  
|_ _ |_ _ **user**  
|_ _ |_ _ |_ _ index.ejs  
|_ _ |_ _ |_ _ edit.ejs  
|_ _ |_ _ **model2**  
|_ _ |_ _ |_ _ index.ejs  
|_ _ |_ _ |_ _ delete.ejs  
