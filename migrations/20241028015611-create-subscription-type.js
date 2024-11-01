'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('subscription_type', {
      id_subscription_type: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      Nombre: {
        type: Sequelize.STRING(30),
        allowNull: true,
      },
    });
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('subscription_type');
  }
};
