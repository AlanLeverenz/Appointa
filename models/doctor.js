module.exports = function(sequelize, DataTypes) {
    var Doctor = sequelize.define("Doctor", 
        {
        fullname: {
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
        Doctor.hasMany(models.Patient, {
          foreignKey: {
            allowNull: true
          }
        });
    }

    return Doctor;
  };