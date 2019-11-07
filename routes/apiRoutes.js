var db = require("../models");

module.exports = function(app) {
  // Get all appointments
  app.get("/api/appointments", function(req, res) {
    db.Appointment.findAll({}).then(function(dbAppointments) {
      res.json(dbAppointments);
    });
  });

  // Create a new appointment
  app.post("/patient/api/appointments", function(req, res) {
    console.log(req.body)
    db.Appointment.create(req.body).then(function(dbAppointment) {
      res.json(dbAppointment);
    });
  });

  // Get all patients
  app.get("/api/patients", function(req, res) {
    db.Patient.findAll({}).then(function(dbPatients) {
      res.json(dbPatients);
    });
  });

  // Create a new patient
  app.post("/api/patients", function(req, res) {
    console.log(req.body)
    db.Patient.create(req.body).then(function(dbPatient) {
      res.json(dbPatient);
    });
  });

  // Delete a patient by id
  app.delete("/api/patient/:id", function(req, res) {
    db.Patient.destroy({ where: { id: req.params.id } }).then(function(dbPatient) {
      res.json(dbPatient);
    });
  });
};
