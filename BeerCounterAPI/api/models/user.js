'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var userSchema = new Schema({
  name: {
    type: String,
    Required: 'Kindly enter your name'
  },
  password: {
      type: String,
      Required: 'Kindly enter a password'
  },
  admin: {
    type: Boolean,
    default: false     
  },
  counter: {
      type: Number,
      default: 0
  }
});

module.exports = mongoose.model('Users', userSchema);