var db = require("../models");

module.exports = function(app){
 //Load appointment page
 app.get("/patient/form", function(req, res) {
    res.render("a-patient-form", {
    });
  });
};