'use strict';
const bcrypt = require('bcrypt')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
      name: 'akmal',
      password: bcrypt.hashSync('12345678', 10),
      email: 'akmal@gmail.com',
      avatar: '',
      birth_date: '1995-04-14',
      created_at: Sequelize.fn('NOW'), 
      updated_at: Sequelize.fn('NOW')
    }], {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
