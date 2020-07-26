
module.exports = function(app){
  
  const UserController = require('../app/controllers/UserController.js');

  app.get('/api/users', UserController.getAll);

  app.get('/api/users/:id', UserController.get);

  app.post('/api/users', UserController.create);

  app.put('/api/users/:id', UserController.update);

  app.delete('/api/users/:id', UserController.delete);

};
