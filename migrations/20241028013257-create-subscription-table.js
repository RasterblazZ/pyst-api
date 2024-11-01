'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('subscriptions', {
      id_subscription: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      Tipo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Nombre: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      MonthDay: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      Monto: {
        allowNull: false,
        type: Sequelize.FLOAT,
      },
      Moneda: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      Estatus: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      Creado: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      Cancelado: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('subscriptions');
  }
};
