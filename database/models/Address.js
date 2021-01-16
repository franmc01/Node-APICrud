const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Address = sequelize.define('address', {
    direccion: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

module.exports = Address;

