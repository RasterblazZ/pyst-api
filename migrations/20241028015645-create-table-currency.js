'use strict';

/** @type {import('sequelize-cli').Migration} */
// CREATE TABLE `currency` (
//   id_currency int not null auto_increment,
//   name varchar(45),
//   currency numeric,
//   primary key (id_currency)
// )
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('currency', {
      id_currency: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING(45)
      },
      currency: {
        type: Sequelize.DECIMAL(10, 2)
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('currency')
  }
};
