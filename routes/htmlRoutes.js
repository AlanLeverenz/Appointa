var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("index", {});
  });

  //Load sign up page
  app.get("/signup", function(req, res) {
    res.render("signup", {
    });
  });

  //Load sign in page
  app.get("/signin", function(req, res) {
    res.render("signin", {
    });
  });

  // Load dashboard page by id for that user/doctor
  app.get("/:id/dashboard", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.render("dashboard", {
        example: dbExample
      });
    });
  });

  //Load profile page
  app.get("/:id/profile", function(req, res) {
    res.render("profile", {
    });
  });

  //Load appointment page
  app.get("/:id/appointment", function(req, res) {
    res.render("appointment", {
    });
  });

  //Load create appointment page
  app.get("/:id/createappointment", function(req, res) {
    res.render("createappointment", {
    });
  });

  //Load message page
  app.get("/:id/message", function(req, res) {
    res.render("message", {
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
