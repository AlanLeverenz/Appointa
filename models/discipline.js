module.exports = function(sequelize, DataTypes) {
    var Discipline = sequelize.define("Discipline", {
      text: DataTypes.STRING,
      description: DataTypes.TEXT
    });
    return Discipline;
  };