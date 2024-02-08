'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('direcciones', [
      {
        calle: 'Canal de la sangria',
        numero_ext: 41,
        ciudad: 'ciudad de mexico',
        delegacion: 'Tlahuac',
        cp: 13529
      },
      {
        calle: 'Carlos Bejaran',
        numero_ext: 101,
        ciudad: 'ciudad de mexico',
        delegacion: 'Tlahuac',
        cp: 19353
      },
      {
        calle: 'Niños Heroes',
        numero_ext: 23,
        ciudad: 'ciudad de mexico',
        delegacion: 'Iztapalapa',
        cp: 90900
      }
      
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('direcciones', null, {});
  }
};
