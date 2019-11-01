module.exports = function(sequelize, DataTypes) {
    var Doctor = sequelize.define("Doctor", 
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
        discipline: {
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
        username: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING,
        },
        account_id: {
            type: DataTypes.INTEGER,
        }
    });

    Doctor.associate = function(models) {
        Doctor.hasMany(models.Appointment, {
          foreignKey: {
            allowNull: false
          }
        });
      };

      Doctor.associate = function(models) {
        Doctor.hasMany(models.Patient, {
          foreignKey: {
            allowNull: false
          }
        });
      };

    return Doctor;
  };