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
            rating: {
                type: Sequelize.INTEGER,
                defaultValue: 0,
                allowNull: false,
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
