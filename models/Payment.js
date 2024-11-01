'use strict';
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection'); // Asegúrate de que la ruta sea correcta

class Payment extends Model {}

Payment.init({
  // Define los atributos del modelo
  idpayments: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  monto: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  monthDay: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Payment',
  tableName: 'payments',
  timestamps: false
});

module.exports = Payment;