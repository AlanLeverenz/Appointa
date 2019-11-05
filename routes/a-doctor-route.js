var db = require("../models");

module.exports = function(app) {
    // Load page with doctor list
    app.get("/doctor", function(req, res) {
        db.Doctor.findAll({}).then(function(dbDoctors){
        res.render("a-doctor", {
            msg: "Select a doctor",
            doctors: dbDoctors 
            });
        });
    });
}  

