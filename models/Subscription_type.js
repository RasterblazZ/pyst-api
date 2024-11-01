'use strict';
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class SubscriptionType extends Model {}

SubscriptionType.init({
  id_subscription_type: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  Nombre: {
    type: DataTypes.STRING(30),
    allowNull: true,
  },
}, {
  sequelize,
  modelName: 'SubscriptionType',
  tableName: 'subscription_type',
  timestamps: false
});

module.exports = SubscriptionType;