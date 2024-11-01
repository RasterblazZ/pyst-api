const { Sequelize } = require('sequelize');
const config = require('./config');

const sequelize = new Sequelize(
  config.mysql.database,
  config.mysql.username,
  config.mysql.password,
  {
    host: config.mysql.host,
    dialect: config.mysql.dialect
  }
);

module.exports = sequelize;