'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // Create the view 'vw_TypeAgrupation' in the 'pst' schema
    const createViewQuery = `
      create VIEW \`vw_TypeAgrupation\` AS
    SELECT 
        Tipo,
        SUM(Monto * b.currency) SubTotal
    FROM
        vw_statement a
    INNER JOIN currency b ON a.Moneda = b.name
    GROUP BY
        Tipo
    ORDER BY
        Tipo ASC
    `;
    await queryInterface.sequelize.query(createViewQuery);
  },

  async down (queryInterface, Sequelize) {
    // Drop the view 'vw_TypeAgrupation' in the 'pst' schema
    await queryInterface.sequelize.query('DROP VIEW IF EXISTS `pst`.`vw_TypeAgrupation`');
  }
};
