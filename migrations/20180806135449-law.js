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
            body: {
                type: Sequelize.STRING(10000),
            },
            creator: {
                type: Sequelize.STRING,
            }
        })
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable("laws");
    }
};
