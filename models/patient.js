module.exports = function(sequelize, DataTypes) {
    var Patient = sequelize.define("Patient", 
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
        },
        username: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING,
        },
        account_id: {
            type: DataTypes.INTEGER,
        },
        insurance_provider: {
            type: DataTypes.STRING,
        },
        insurance_group_id: {
            type: DataTypes.STRING,
        },
    });

    // Patient.associate = function(models) {
    //     Patient.hasMany(models.Appointment, {
    //       foreignKey: {
    //         allowNull: false
    //       }
    //     });
    //   };

    //   Patient.associate = function(models) {
    //     Patient.hasMany(models.Doctor, {
    //       foreignKey: {
    //         allowNull: false
    //       }
    //     });
    //   };

    return Patient;
  };
