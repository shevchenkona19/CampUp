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
        body: {
            type: Sequelize.STRING(10000),
        },
        creator: {
            type: Sequelize.STRING,
        }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("news");
  }
};
