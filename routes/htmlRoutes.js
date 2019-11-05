var db = require("../models");

module.exports = function(app) {

  // home / index
  require('./indexRoute')(app);

  // patient route
  require('./a-patient-route')(app);

  // doctor route
  require('./a-doctor-route')(app);

  //patient form route
  require('./a-patient-form-route')(app);

  // dashboard
  require('./dashboardRoute')(app);

  //profile
  require('./profileRoute')(app);

  //Load message page
  require('./messageRoute')(app);

  // Render 404 page for any unmatched routes
  require('./404errorRoute')(app);

};
