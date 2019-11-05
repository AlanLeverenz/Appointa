var db = require("../models");

module.exports = function(app) {

  // home / index
  require('./indexRoute')(app);

  // PATIENT ROUTES
  
  // patient route
  require('./a-patient-route')(app);

  //patient dashboard route
  require('./a-patient-dashboard-route')(app);

  //patient form route
  require('./a-patient-form-route')(app);

  //patient profile route
  require('./a-patient-profile-route')(app);

  //patient appt list route
  require('./a-patient-appts-route')(app);

  // DOCTOR ROUTES

  // doctor route
  require('./a-doctor-route')(app);

  //doctor appt list route
  require('./a-doctor-appts-route')(app);

  //doctor profile route
  require('./a-doctor-profile-route')(app);

  // Render 404 page for any unmatched routes
  require('./404errorRoute')(app);

};
