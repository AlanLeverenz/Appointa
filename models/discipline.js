module.exports = function(sequelize, DataTypes) {
    var Discipline = sequelize.define("Discipline", {
      discipline: DataTypes.STRING,
    });
    return Discipline;
  };