var db = require("../models");

module.exports = function(app) {
    // Load page with doctor list
    app.get("/doctor/:id", function(req, res) {
        db.Doctor.findOne({ where: {id: req.params.id } }).then(function(dbDoctor){
        res.render("a-doctor-profile", {
            msg: "Your profile",
            doctor: dbDoctor
            });
        });
    });
}  