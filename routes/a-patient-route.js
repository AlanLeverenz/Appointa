var db = require("../models");

module.exports = function(app) {
    // Load patient page
    app.get("/patient", function(req, res) {
        db.Patient.findAll({}).then(function(dbPatients){
        res.render("a-patient", {
            msg: "Select a patient",
            patients: dbPatients 
            });
        });
    });
} 