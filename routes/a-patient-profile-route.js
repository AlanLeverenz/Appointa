var db = require("../models");

module.exports = function(app) {
    // Load page with doctor list
    app.get("/patient/:id", function(req, res) {
        db.Patient.findOne({ where: {id: req.params.id } }).then(function(dbPatient){
        res.render("a-patient-profile", {
            msg: "Your profile",
            patient: dbPatient
            });
        });
    });
}  