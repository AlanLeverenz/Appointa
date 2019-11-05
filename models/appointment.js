module.exports = function(sequelize, DataTypes) {
    var Appointment = sequelize.define("Appointment", 
      {
        firstname: { 
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [1]
          }
        },
        lastname: { 
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [1]
          }
        },
        email: { 
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [1]
          }
        },
        phone: { 
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [1]
          }
        },
        appointment_date: { 
          type: DataTypes.STRING,
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
        visit_purpose: { 
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [1]
          }
        },
        doctor: { 
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [1]
          }
        },
        insurance_provider: { 
          type: DataTypes.STRING,
        },
        insurance_groupid: { 
          type: DataTypes.STRING,
        },
        doctor_response: { 
          type: DataTypes.STRING,
        },
        symptoms: { 
          type: DataTypes.STRING,
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