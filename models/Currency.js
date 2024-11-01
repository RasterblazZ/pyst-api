'use strict';
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Currency extends Model {}

Currency.init({
  id_currency: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(45),
  },
  currency: {
    type: DataTypes.DECIMAL(10, 2),
  },
}, {
  sequelize,
  modelName: 'Currency',
  tableName: 'currency',
  timestamps: false
});

module.exports = Currency;