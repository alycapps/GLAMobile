const db = require("../models");

// Defining methods for the stylistController
module.exports = {
  findAll: function(req, res) {
    console.log('stylistController.findAll');
    db.User.find(req.query)
      .then(users => res.json(users))
      //error handling
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.User.findById(req.params.id)
      .then(singleUser => res.json(singleUser))
      //error handling
      .catch(err => res.status(422).json(err));
  },
  // create: function(req, res) {
  //   db.User.create(req.body)
  //     .then(newUser => res.json(newUser))
  //     //error handling
  //     .catch(err => res.status(422).json(err));
  // },
  update: function(req, res) {
    db.User.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      //error handling
      .catch(err => res.status(422).json(err));
  }
  // remove: function(req, res) {
  //   db.User.findById({ _id: req.params.id })
  //     .then(dbModel => dbModel.remove())
  //     .then(dbModel => res.json(dbModel))
  //     //error handling
  //     .catch(err => res.status(422).json(err));
  // }
};
