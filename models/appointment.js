module.exports = function(sequelize, DataTypes) {
    var Appointment = sequelize.define("Appointment", 
      {
      appointment_date: { 
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      appointment_time: { 
        type: DataTypes.TIME,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      patient_purpose_for_request: { 
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      doctor_response: { 
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      symptoms: { 
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      examination: { 
        type: DataTypes.STRING,
      },
      tests: { 
        type: DataTypes.STRING,
      },
      diagnosis: { 
        type: DataTypes.STRING,
      },
      medications: { 
        type: DataTypes.STRING,
      },
      treatment_plan: { 
        type: DataTypes.STRING,
      },
      forwarded_to_billing: { 
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      status: { 
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      }
    });

    Appointment.associate = function(models) {
      Appointment.belongsTo(models.Patient, {
        foreignKey: {
          allowNull: false
        }
      });
    };

    Appointment.associate = function(models) {
      Appointment.belongsTo(models.Doctor, {
        foreignKey: {
          allowNull: false,
            constraints: false
        }
      });
    };
    return Appointment;
  };