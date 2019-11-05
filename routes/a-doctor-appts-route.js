var db = require("../models");

module.exports = function(app) {
    // Load patient page
    app.get("/doctor/appts/:id", function(req, res) {
        db.Appointment.findAll({}).then(function(dbAppointments){
        res.render("a-doctor-appts", {
            msg: "Appointment List",
            appointments: dbAppointments 
            });
        });
    });
} 