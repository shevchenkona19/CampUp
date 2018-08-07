'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("country", {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: Sequelize.STRING,
            },
            president: {
                type: Sequelize.STRING,
            },
            budget: {
                type: Sequelize.INTEGER,
            }
        })
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable("country");
    }
};
