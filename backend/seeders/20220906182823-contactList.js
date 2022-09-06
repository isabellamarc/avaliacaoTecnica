module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('contactList', [
      {
        id: '1',
        nome: 'isabella',
        email: 'isabella@email.com',
        telefone: '48991432596',
        whatsapp: '48991432596',
      },
      {
        id: '2',
        nome: 'user',
        email: 'user@email.com',
        telefone: '48991483647',
        whatsapp: '48991483647',
      },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('contactList', null, {});
  },
};