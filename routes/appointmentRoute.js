var db = require("../models");


module.exports = function(app){
 //Load appointment page
 app.get("/:id/appointment", function(req, res) {
    res.render("appointment", {
    });
  });
};