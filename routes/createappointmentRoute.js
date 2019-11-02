var db = require("../models");


module.exports = function(app){
  //Load create appointment page
  app.get("/:id/createappointment", function(req, res) {
    res.render("createappointment", {
    });
  });
};