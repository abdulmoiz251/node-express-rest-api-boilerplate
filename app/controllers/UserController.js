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
