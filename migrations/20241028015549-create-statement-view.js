'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  // CREATE ALGORITHM=UNDEFINED DEFINER='root'@'localhost' SQL SECURITY DEFINER VIEW 'pst'.'vw_statement' AS select 'b'.'Tipo' AS 'Tipo','b'.'Nombre' AS 'Nombre','b'.'MonthDay' AS 'MonthDay','b'.'Monto' AS 'Monto','b'.'Moneda' AS 'Moneda','b'.'Estatus' AS 'Estatus','b'.'Creado' AS 'Creado','b'.'Cancelado' AS 'Cancelado' from 'pst'.'subscriptions' 'b' where ('b'.'Estatus' = 'Activo') union all select 'Payment' AS 'Payment','a'.'nombre' AS 'Nombre','a'.'monthDay' AS 'MonthDay','a'.'monto' AS 'Monto','GTQ' AS 'GTQ','Activo' AS 'Activo',NULL AS 'NULL',NULL AS 'NULL' from 'pst'.'payments' 'a';
  async up (queryInterface, Sequelize) {
    // Create the view 'vw_statement' in the 'pst' schema
    const createViewQuery = `

    create VIEW \`vw_statement\` AS
    SELECT 
        \`b\`.\`Tipo\` AS \`Tipo\`,
        \`b\`.\`Nombre\` AS \`Nombre\`,
        \`b\`.\`MonthDay\` AS \`MonthDay\`,
        \`b\`.\`Monto\` AS \`Monto\`,
        \`b\`.\`Moneda\` AS \`Moneda\`,
        \`b\`.\`Estatus\` AS \`Estatus\`,
        \`b\`.\`Creado\` AS \`Creado\`,
        \`b\`.\`Cancelado\` AS \`Cancelado\`
    FROM
        \`subscriptions\` \`b\`
    WHERE
        \`b\`.\`Estatus\` = 'Activo'
    UNION ALL SELECT 
        'Payment' AS \`Payment\`,
        \`a\`.\`nombre\` AS \`Nombre\`,
        \`a\`.\`monthDay\` AS \`MonthDay\`,
        \`a\`.\`monto\` AS \`Monto\`,
        'GTQ' AS \`GTQ\`,
        'Activo' AS \`Activo\`,
        NULL AS \`NULL\`,
        NULL AS \`NULL\`
    FROM
        \`payments\` \`a\`
    `;

    await queryInterface.sequelize.query(createViewQuery);
  },

  async down (queryInterface, Sequelize) {
    // Drop the view 'vw_statement' in the 'pst' schema
    await queryInterface.sequelize.query('DROP VIEW `pst`.`vw_statement`');
  }
};
