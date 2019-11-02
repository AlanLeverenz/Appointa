var db = require("../models");

module.exports = function(app) {
  //Load sign up page
  app.get("/signup", function(req, res) {
    res.render("signup", {
        
    });
  });
};
