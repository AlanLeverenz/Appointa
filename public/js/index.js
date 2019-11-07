// Get references to page elements

// Appointments
var $apptFirstName = $("#appt-firstname");
var $apptLastName = $("#appt-lastname");
var $apptEmail = $("#appt-email");
var $apptPhone = $("#appt-phone");
var $doctor = $("#select-doctor");
// var $doctorId = $(".doctor-id");
var $insuranceProvider = $("#insurance-provider");
var $groupID = $("#group-id");
var $visitPurpose = $("#visit-purpose");
var $appointmentDate = $("#appt-date");
var $appointmentTime = $("#appt-time");
var $appointmentStatus = '';
var $submitApptBtn = $("#submit-appt");
var $appointmentList = $("#appointment-list");

// Patients
var $patientFirstName = $("#patient-firstname");
var $patientLastName = $("#patient-lastname");
var $patientEmail = $("#patient-email");
var $submitPatientBtn = $("#submit-patient");
var $patientList = $("#patient-list");

// The API object contains methods for each kind of request we'll make
var API = {
  savePatient: function(patient) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "/api/patients",
      data: JSON.stringify(patient)
    });
  },
  saveAppointment: function(appointment) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/appointments",
      data: JSON.stringify(appointment)
    });
  },
  getAppointments: function() {
    return $.ajax({
      url: "api/appointments",
      type: "GET"
    });
  },
  getPatients: function() {
    return $.ajax({
      url: "api/patients",
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
  },
  deletePatient: function(id) {
    return $.ajax({
      url: "api/patient/" + id,
      type: "DELETE"
    });
  }
};

// refresh patient list
var refreshPatients = function() {
  API.getPatients().then(function(data) {
    var $patients = data.map(function(patient) {  
      var $a = $("<a>")
        .text(patient.firstname + " " + patient.lastname)
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

      $li.append($button);

      return $li;
    });
    $patientList.empty();
    $patientList.append($patients);
  });
};

// ADD APPOINTMENT ======

// handleApptFormSubmit is called when submitting a new appointment

var handleApptFormSubmit = function(event) {
  event.preventDefault();

  var appointment = {
    firstname: $apptFirstName.val().trim(),
    lastname: $apptLastName.val().trim(),
    email: $apptEmail.val().trim(),
    phone: $apptPhone.val().trim(),
    appointment_date: $appointmentDate.val().trim(),
    appointment_time: $appointmentTime.val().trim(),
    visit_purpose: $visitPurpose.val().trim(),
    doctor: $doctor.val().trim(),
    DoctorId: $('.form-control option:selected').attr('data-id'),
    insurance_provider: $insuranceProvider.val().trim(),
    insurance_groupid: $groupID.val().trim(),
    status: "New"
  };

  if (!(appointment.firstname && appointment.lastname && appointment.email && appointment.visit_purpose)) {
    alert("You must enter your name, email, and a purpose for your visit!");
    return;
  }

  API.saveAppointment(appointment).then(function() {
    console.log("Appointment saved.");
    console.log($doctorId);
  });


  $apptFirstName.val("");
  $apptLastName.val("");
  $apptEmail.val("");
  $apptPhone.val("");
  $doctor.val("");
  $insuranceProvider.val("");
  $groupID.val("");
  $visitPurpose.val("");
  $appointmentDate.val("");
  $appointmentTime.val("");
};

// ADD PATIENT ======

// handlePatientFormSubmit is called when submitting a new patient
// refresh the list of patients

var handlePatientFormSubmit = function(event) {
  event.preventDefault();

  var patient = {
    firstname: $patientFirstName.val().trim(),
    lastname: $patientLastName.val().trim(),
    email: $patientEmail.val().trim(),
  };

  if (!(patient.firstname && patient.lastname && patient.email)) {
    alert("You must enter your name and email!");
    return;
  }

  API.savePatient(patient).then(function() {
    console.log("Patient saved.");
    refreshPatients();
  });

  $patientFirstName.val("");
  $patientLastName.val("");
  $patientEmail.val("");
};

// DELETE PATIENT ====

// handleDeleteBtnClick is called when an appointment's Confirm button is clicked
// Remove the patient from the db and refresh the list

var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deletePatient(idToDelete).then(function() {
    refreshPatients(); 
    console.log("patient deleted")
  });
};

// EVENT LISTENERS =====

// Add event listeners to the submit appt, submit patient, and the delete button to delete a patient

$submitPatientBtn.on("click", handlePatientFormSubmit);
$submitApptBtn.on("click", handleApptFormSubmit);
$patientList.on("click", ".delete", handleDeleteBtnClick);

// FOR THE DROPDOWN MENU IN THE APPOINTMENT FORM =====

  $(".doctor-appts").click(function() {
      doctorID = $(this).attr("data-id");
      window.location.assign(`/doctor/appts/${doctorID}`);
  });

  // FOR REFRESHING APPOINTMENT LISTS 

// refreshAppointments gets new appointments from the db and repopulates the list
// var refreshAppointments = function() {
//   API.getAppointments().then(function(data) {
//     var $appointments = data.map(function(appointment) {
//       var $a = $("<a>")
//         .text(appointment.visit_purpose)
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

//       $li.append($button);

//       return $li;
//     });

//     $appointmentList.empty();
//     $appointmentList.append($appointments);
//   });
// };
