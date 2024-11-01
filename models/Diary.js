'use strict';
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Diary extends Model {}

Diary.init({
  id_diary: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  account_type: {
    type: Sequelize.CHAR(10),
    allowNull: false
  },
  diary_date: {
    type: Sequelize.DATE,
    allowNull: false
  },
  amount: {
    type: Sequelize.DECIMAL(5, 2),
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Diary',
  tableName: 'diary',
  timestamps: false
});

module.exports = Diary;