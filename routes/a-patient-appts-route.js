var db = require("../models");

module.exports = function(app) {
    // Load patient page
    app.get("/patient-appts", function(req, res) {
        db.Appointment.findAll({}).then(function(dbAppointments){
        res.render("a-patient-appts", {
            msg: "Appointment List",
            appointments: dbAppointments 
            });
        });
    });
} 

module.exports = function(app) {
    // Load patient page
    app.get("/patient/appts/:id", function(req, res) {
        db.Appointment.findAll({}).then(function(dbAppointments){
        res.render("a-patient-appts", {
            msg: "Appointment List",
            appointments: dbAppointments 
            });
        });
    });
} 