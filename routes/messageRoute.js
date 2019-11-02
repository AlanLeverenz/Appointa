var db = require("../models");


module.exports = function(app) {
  //Load message page
  app.get("/:id/message", function(req, res) {
    res.render("message", {});
  });
};
