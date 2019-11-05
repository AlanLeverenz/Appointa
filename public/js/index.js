// Get references to page elements
var $patientFirstName = $("#patient-firstname");
var $patientLastName = $("#patient-lastname");
var $patientEmail = $("#patient-email");
// var $visitPurpose = $("#visit-purpose");
// var $appointmentDate = $("#appointment-date");
// var $appointmentTime = $("#appointment-time");
// var $appointmentStatus = $("#appointment-status");
var $submitBtn = $("#submit");
// var $appointmentList = $("#appointment-list");
var $patientList = $("#patient-list");

// DROPPED IN CODE FOR SELECTING FROM A LIST
   // select category
  //  $(".dropdown-menu a").click(function() {
  //   // get category text and index from click event
  //   catText = $(this).text();
  //   catIndex = $(this).attr("id");
  //   // write pulldown text and array index to #current-category and #user-select attribute
  //   $("#current-category").html("<h4 id='user-select'>" + catText + "</h4>");
  //   $("#user-select").attr("cat-index",catIndex);
  //  });
// END

// The API object contains methods for each kind of request we'll make
var API = {
  savePatient: function(patient) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/patient",
      data: JSON.stringify(patient)
    });
  },
  // saveAppointment: function(appointment) {
  //   return $.ajax({
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     type: "POST",
  //     url: "api/appointments",
  //     data: JSON.stringify(appointment)
  //   });
  // },
  getAppointments: function() {
    return $.ajax({
      url: "api/appointments",
      type: "GET"
    });
  },
  confirmAppointment: function(id) {
    return $.ajax({
      url: "api/appointments/confirm/" + id,
      type: "UPDATE"
    });
  },
  cancelAppointment: function(id) {
    return $.ajax({
      url: "api/appointments/cancel/" + id,
      type: "UPDATE"
    });
  }
};

// refresh patient list
var refreshPatients = function() {
  API.getPatients().then(function(data) {
    var $patients = data.map(function(patient) {
      var $a = $("<a>")
        .text(patient.firstname + ' ' + patient.lastname)
        .attr("href", "/patient/" + patient.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": patient.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .html('<i class="fas fa-trash-alt"></i>');

      $li.patient($button);

      return $li;
    });

    $patientList.empty();
    $patientList.append($patients);
  });
};


// refreshAppointments gets new appointments from the db and repopulates the list
// var refreshAppointments = function() {
//   API.getAppointments().then(function(data) {
//     var $appointments = data.map(function(appointment) {
//       var $a = $("<a>")
//         .text(appointment.patient_request)
//         .attr("href", "/appointment/" + appointment.id);

//       var $li = $("<li>")
//         .attr({
//           class: "list-group-item",
//           "data-id": appointment.id
//         })
//         .append($a);

//       var $button = $("<button>")
//         .addClass("btn btn-danger float-right confirm")
//         .text("Confirm");

//       $li.appointment($button);

//       return $li;
//     });

//     $appointmentList.empty();
//     $appointmentList.append($appointments);
//   });
// };

// handleFormSubmit is called whenever we submit a new appointment
// Save the new appointment to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var patient = {
    firstname: $patientFirstName.val().trim(),
    lastname: $patientLastName.val().trim(),
    email: $patientEmail.val().trim()
  };

  if (!(patient.firstname && patient.lastname && patient.email)) {
    alert("You must enter your name and email! ... I'm not shouting.");
    return;
  }

  API.savePatient(patient).then(function() {
    console.log("Patient saved (we'll see).");
    // Here is where the function for email notifications should be inserted.
    // refreshAppointments();
  });

  $patientFirstName.val("");
  $patientLastName.val("");
  $patientEmail.val("");
};

// handleConfirmBtnClick is called when an appointment's Confirm button is clicked
// Update the appointment from the db and refresh the list
// var handleConfirmBtnClick = function() {
//   var idToConfirm = $(this)
//     .parent()
//     .attr("data-id");

//   API.confirmExample(idToConfirm).then(function() {
//     refreshAppointments();
//   });
// };

// // Add event listeners to the submit and delete buttons
// $submitBtn.on("click", handleFormSubmit);
// $appointmentList.on("click", ".confirm", handleConfirmBtnClick);
