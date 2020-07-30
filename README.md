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
project_root   
|  
|_ _ **app**  
|_ _ |_ _ **controllers**  
|_ _ |_ _ |_ _ userController.js   
|_ _ |_ _ **middlewares**  
|_ _ |_ _ |_ _ error.js  
|_ _ |_ _ |_ _ logger.js   
|_ _ |_ _ **models**  
|_ _ |_ _ |_ _ user.js   
|_ _ |_ _ **services**  
|_ _ |_ _ |_ _ databaseService.js   
|_ _ **config**  
|_ _ |_ _ constants.js  
|_ _ |_ _ index.js  
|_ _ |_ _ routes.js  
|_ _ **public**  
|_ _ |_ _ css  
|_ _ |_ _ images  
|_ _ |_ _ js  
|_ _ **views**  
|_ _ |_ _ **user**  
|_ _ |_ _ |_ _ index.ejs  
