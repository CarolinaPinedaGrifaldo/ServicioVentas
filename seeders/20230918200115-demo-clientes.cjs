'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('clientes', [
      {
        RFC: 'QUMA470929F37',
        nombre: 'Alfonso Quintero Montenegro',
      },
      {
        RFC: 'PELJ800715',
        nombre: 'Juan Pérez López'
      },
      {
        RFC: 'ROGM951125',
        nombre: 'María Rodríguez Gómez'
      },
      {
        RFC: 'HELJ870210',
        nombre: 'Carlos Hernández López'
      },

    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('clientes', null, {});  
  }
};
