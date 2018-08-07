'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("userParty", {
            userId: {
                type: Sequelize.INTEGER,
            },
            partyId: {
                type: Sequelize.INTEGER,
            }
        })
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable("userParty");
    }
};
