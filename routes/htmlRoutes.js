var db = require("../models");

module.exports = function(app) {

  // Load index page
  app.get("/", function(req, res) {
    res.render("index", {
    });
  });

  // PATIENT ROUTES =========

  // render the patient list
  app.get("/patient", function(req, res) {
    db.Patient.findAll({}).then(function(dbPatients){
    res.render("a-patient", {
        msg: "Select a patient",
        patients: dbPatients 
      });
    });
  });

  // render the patient dashboard
  app.get("/patient/dashboard/:id", function(req, res) {
    res.render("a-patient-dashboard", {
    });
  });

  // render the appointment form
  app.get("/patient/form", function(req, res) {
    db.Doctor.findAll({}).then(function(dbDoctors){
    res.render("a-patient-form", {
        doctors: dbDoctors 
      });
    });
  });

  // render a patient's profile
  app.get("/patient/:id", function(req, res) {
    db.Patient.findOne({ where: {id: req.params.id } }).then(function(dbPatient){
    res.render("a-patient-profile", {
        msg: "Your profile",
        patient: dbPatient
      });
    });
  });

  // render a patient's appointments
  app.get("/patient/appts/:id", function(req, res) {
    db.Appointment.findAll({ where: { PatientId: req.params.id} }).then(function(dbAppointments){
    res.render("a-patient-appts", {
        msg: "Your appointment list",
        appointments: dbAppointments 
        });
      });
  });

  // DOCTOR ROUTES ========

  // render the doctor list
  app.get("/doctor", function(req, res) {
    db.Doctor.findAll({}).then(function(dbDoctors){
    res.render("a-doctor", {
        msg: "Select a doctor",
        doctors: dbDoctors 
      });
    });
  });

  // render a doctor's appointments
  app.get("/doctor/appts/:id", function(req, res) {
    db.Appointment.findAll({ where: { DoctorId: req.params.id} }).then(function(dbAppointments){
    res.render("a-doctor-appts", {
        msg: "Appointment list",
        appointments: dbAppointments
        });
    });
});

  // render a doctor's profile
  app.get("/doctor/:id", function(req, res) {
    db.Doctor.findOne({ where: {id: req.params.id } }).then(function(dbDoctor){
    res.render("a-doctor-profile", {
        msg: "Your profile",
        doctor: dbDoctor
      });
    });
  });

    // do a search
    app.get("/appointments/", function(req, res) {
      db.Doctor.findOne({ where: {id: req.params.id } }).then(function(dbDoctor){
      res.render("a-doctor-profile", {
          msg: "Your profile",
          doctor: dbDoctor
        });
      });
    });
  
   

  // PAGE ERROR  =======

  // Render 404 page for any unmatched routes
  require('./404errorRoute')(app);

};
