var db = require("../models");


module.exports = function(app){
 //Load profile page
 app.get("/:id/profile", function(req, res) {
    res.render("profile", {
    });
  });
};