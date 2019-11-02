var db = require("../models");


module.exports = function(app){
// dashboard Route
app.get("/:id/dashboard", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.render("dashboard", {
      });
    });
  });
}