var db = require("../models");


module.exports = function(app){
 //Load sign in page
 app.get("/signin", function(req, res) {
    res.render("signin", {
    });
  });
};