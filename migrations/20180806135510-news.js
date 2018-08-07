'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("news", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: Sequelize.STRING,
        },
        description: {
            type: Sequelize.STRING,
        },
        creatorId: {
            type: Sequelize.INTEGER,
        }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("news");
  }
};
