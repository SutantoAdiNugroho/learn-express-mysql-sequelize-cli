'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    // return queryInterface.bulkInsert('users', [
    //   {
    //     firstname: 'Adi',
    //     lastname: 'Nugroho',
    //     password: '131313',
    //     email: 'adi@gmail.com',
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   }
    // ])
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
