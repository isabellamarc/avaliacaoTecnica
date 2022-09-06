module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('contactLists', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        allowNull: false,
        type: Sequelize.STRING
      },
      email: {
        allowNull: true,
        type: Sequelize.STRING
      },
      telefone: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      whatsapp: {
        allowNull: true,
        type: Sequelize.INTEGER
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('contactLists');
  }
};