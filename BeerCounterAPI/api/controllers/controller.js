'use strict';

var mongoose = require('mongoose'),
  User = mongoose.model('Users'),
  Available = mongoose.model('Available');
var config = require('../../config');
var jwt    = require('jsonwebtoken');

exports.create_a_user = function(req, res) {
    var new_user = new User(req.body);
    new_user.save(function(err, user) {
        if (err) 
            res.send(err);
        console.log('User saved successfully');
        res.json(user);
    });
};

exports.authenticate_user = function(req, res) {
  // find the user
  User.findOne({
    name: req.body.name
  }, function(err, user) {

    if (err) res.send(err);

    if (!user) {
      res.json({ success: false, message: 'Authentication failed. User not found.' });
    } else if (user) {

      // check if password matches
      if (user.password != req.body.password) {
        res.json({ success: false, message: 'Authentication failed. Wrong password.' });
      } else {

        // if user is found and password is right
        // create a token
        var token = jwt.sign(user, config.secret, {
          expiresIn: 1440*60 // expires in 24 hours
        });
            console.log("Token created");
        // return the information including token as JSON
        res.json({
          success: true,
          message: 'Enjoy your token!',
          token: token,
          user: user
        });
      }   

    }

  });
};

exports.get_users_informations = function(req, res) {
  User.find({}, function(err, users) {
    if (err)
      res.send(err);
    res.json(users);
  });
};

exports.get_user_information = function(req, res) {
  User.findById(req.params.userID, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};


exports.update_user_information = function(req, res) {
  User.findOneAndUpdate({_id: req.params.userID}, req.body, {new: true}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
    console.log("updatedUser:" + JSON.stringify(user));
  });
};


exports.delete_a_user = function(req, res) {
  User.remove({
    _id: req.params.userID
  }, function(err) {
    if (err)
      res.send(err);
    console.log("User deleted");
    res.json({ message: 'User successfully deleted' });
  });
};

exports.get_available = function(req, res) {
    Available.find({}, function(err, available){
        if(err)
            res.send(err);
        res.json(available);
    });
};

exports.set_available = function(req, res) {
    var new_available = new Available(req.body);
    new_available.save(function(err, available) {
        if (err) 
            res.send(err);
        console.log('Available saved successfully');
        res.json(available);
    });
};

exports.update_available = function(req, res) {
  Available.findOneAndUpdate({_id: req.params.availableID}, req.body, {new: true}, function(err, available) {
    if (err)
      res.send(err);
    res.json(available);
    console.log("updatedAvailable:" + JSON.stringify(available));
  });
};

exports.check_if_user_exist = function(req, res){
  User.findOne({
    name: req.body.name
  }, function(err, user) {

    if (err) res.send(err);

    if (!user) {
        res.json({ success: true, message: 'User does not exist!' });
    } else if (user) {   
        res.json({ success: false, message: 'User does already exist!' });
    }

  });
}