var db = require("../models");

module.exports = function(app){
 //Load appointment page
 app.get("/patient/dashboard/:id", function(req, res) {
    res.render("a-patient-dashboard", {
    });
  });
};