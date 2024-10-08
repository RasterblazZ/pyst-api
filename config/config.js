require('dotenv').config(); // Cargar las variables de entorno desde el archivo .env

module.exports = {
  mysql: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'mysql',  // O el dialecto que uses: 'postgres', 'sqlite', etc.
  },
};
