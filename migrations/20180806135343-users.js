'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("users", {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            firstName: {
                type: Sequelize.STRING,
            },
            lastName: {
                type: Sequelize.STRING,
            },
            status: {
                type: Sequelize.STRING
            }
        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable("users");
    }
};
