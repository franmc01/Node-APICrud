const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const User = sequelize.define('users', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        len: {
          args: [2, 100],
          msg: "El nombre debe tener al menos 2 caracteres" 
        },
        isAlpha: {
          args: true,
          msg: "Solo se puede ingresar texto en el campo nombres"
        },
      }
    },
    lastName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: "El correo que ingreso ya existe en nuestra base de datos, ingrese uno diferente"
      },
      validate:{
        isEmail: {
          args: true,
          msg: "Debe ingresar un correo válido"
        } 
      }
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notNull:{
          msg: "No puede enviar el campo vacio"
        },
        isInt: {
          args: true,
          msg: "La edad debe ser un número"
        },
        min: {
          args:18,
          msg: "La persona a registrar deber ser mayor de edad"
        },
        max: 100,   
      }
    },
    //Si es 0 es usuario normal y si es 1 es admin
    role: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
});

module.exports = User;