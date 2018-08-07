'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("laws", {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            title: {
                type: Sequelize.STRING,
            },
            description: {
                type: Sequelize.STRING,
            },
            partyId: {
                type: Sequelize.INTEGER
            }
        })
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable("laws");
    }
};
