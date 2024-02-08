'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('direccion_cliente',[
      {
        createdAt: '2023/09/19',
        updatedAt: '2023/09/19',
        direccion_id: 5,
        cliente_RFC: 'QUMA470929F37'
      },
      {
        createdAt: '2023/09/19',
        updatedAt: '2023/09/19',
        direccion_id: 6,
        cliente_RFC: 'QUMA470929F37'
      },
      {
        createdAt: '2023/09/19',
        updatedAt: '2023/09/19',
        direccion_id: 7,
        cliente_RFC: 'PELJ800715'
      },
      {
        createdAt: '2023/09/19',
        updatedAt: '2023/09/19',
        direccion_id: 5,
        cliente_RFC: 'ROGM951125'
      },
      {
        createdAt: '2023/09/19',
        updatedAt: '2023/09/19',
        direccion_id: 7,
        cliente_RFC: 'HELJ870210'
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
