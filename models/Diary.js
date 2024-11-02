'use strict';
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Diary extends Model {}

Diary.init({
  id_diary: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  account_type: {
    type: DataTypes.CHAR(10),
    allowNull: false
  },
  diary_date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  amount: {
    type: DataTypes.DECIMAL(5, 2),
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Diary',
  tableName: 'diary',
  timestamps: false
});

module.exports = Diary;