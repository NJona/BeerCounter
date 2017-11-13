'use strict';
module.exports = function(app) {
  var controller = require('../controllers/controller');


  app.route('/users')
    .post(controller.create_a_user);

  app.route('/authenticate')
    .post(controller.authenticate_user);

  app.route('/available')
    .get(controller.get_available)
};