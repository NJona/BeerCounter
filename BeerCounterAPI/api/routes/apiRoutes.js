'use strict';
module.exports = function(app) {
  var controller = require('../controllers/controller');


  app.route('/users')
    .get(controller.get_users_informations);


  app.route('/users/:userID')
    .get(controller.get_user_information)
    .put(controller.update_user_information)
    .delete(controller.delete_a_user);

  app.route('/available')
    .post(controller.set_available);

  app.route('/available/:availableID')
    .put(controller.update_available);

  app.route('/checkuser')
    .post(controller.check_if_user_exist);
};