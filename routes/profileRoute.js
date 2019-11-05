var db = require("../models");



module.exports = function(app){
 //Load profile page
 app.get("/:id/profile", function(req, res) {
   db.Patient.findAll({}).then(function(Profiledata) {
     console.log(Profiledata);
    res.render("profile", {
      test: "Here it is working",
      firstname: Profiledata
   });
    

    });
  });
};


