module.exports = function(sequelize, DataTypes) {
    var Review = sequelize.define("Review", 
        {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        review: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        stars: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                values: [1-5]  // looking for a value between 1 and 5 CHECK THIS
            }
        },
    });

    Review.associate = function(models) {
        Review.hasOne(models.Patient, {
          foreignKey: {
            allowNull: false
          }
        });
      };

    return Review;
  };