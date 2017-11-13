'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var availableSchema = new Schema({
  available: {
      type: Number,
      default: 0
  }
});

module.exports = mongoose.model('Available', availableSchema);