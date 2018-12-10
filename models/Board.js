module.exports = function(sequelize, Datatypes) {
  var Boards = sequelize.define("Boards", {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Datatypes.INTEGER
    },
    contents: {
      type: Datatypes.STRING(1000)
    },
    author: {
      type: Datatypes.STRING(100)
    }
  });

  return Boards;
};
