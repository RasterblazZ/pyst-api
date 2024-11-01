const dotenv = require('dotenv');

// Cargar variables de entorno desde el archivo .env
dotenv.config();

module.exports = {
  mysql: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: 'mysql'
  }
};