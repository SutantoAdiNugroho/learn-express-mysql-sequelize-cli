'use strict';
module.exports = (sequelize, DataTypes) => {
  const todos = sequelize.define('todos', {
    todo: DataTypes.STRING,
    status: {type: DataTypes.BOOLEAN, defaultValue: false},
    userId: DataTypes.INTEGER,
    email: DataTypes.STRING,
    name: DataTypes.STRING
  }, {});
  todos.associate = function(models) {
    todos.belongsTo(models.users)
    // associations can be defined here
  };
  return todos;
};