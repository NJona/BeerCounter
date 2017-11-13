var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  User = require('./api/models/user'),
  Available = require('./api/models/available'),
  bodyParser = require('body-parser');

var config = require('./config');
var jwt    = require('jsonwebtoken');
var cors = require('cors');

mongoose.Promise = global.Promise;
mongoose.connect(config.database);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

var basicRoutes = require('./api/routes/basicRoutes');
basicRoutes(app);

app.use(function(req, res, next) {
  var token = req.body.token || req.query.token || req.headers['x-access-token'];

  if (token) {

    jwt.verify(token, config.secret, function(err, decoded) {      
      if (err) {
        return res.json({ success: false, message: 'Failed to authenticate token.' });    
      } else {
        req.decoded = decoded;    
        next();
      }
    });

  } else {

    return res.status(403).send({ 
        success: false, 
        message: 'No token provided.',
        headers: req.headers
    });
    
  }
});

var apiRoutes = require('./api/routes/apiRoutes');
apiRoutes(app);

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);