const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const User = sequelize.define('users', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    }
});

module.exports = User;