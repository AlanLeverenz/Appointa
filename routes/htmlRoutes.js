var db = require("../models");

module.exports = function(app) {

  // home / index
  require('./indexRoute')(app);

  // sign up
  require('./signupRoute')(app);

  // sign in
  require('./signinRoute')(app);

  // dashboard
  require('./dashboardRoute')(app);

  //profile
  require('./profileRoute')(app);

  //appointment
  require('./appointmentRoute')(app);


  //create appointment
  require('./createappointmentRoute')(app);


  //Load message page
  require('./messageRoute')(app);


  // Render 404 page for any unmatched routes
  require('./404errorRoute')(app);

};
