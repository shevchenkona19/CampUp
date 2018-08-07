'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("parties", {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: Sequelize.STRING,
            },
            description: {
                type: Sequelize.STRING,
            },
            ideology: {
                type: Sequelize.STRING,
            }
        })
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable("parties");
    }
};
