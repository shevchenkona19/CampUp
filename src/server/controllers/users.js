const Users = require("../models/index").getUsersModel();
const Op = require("../models/index").getDb().Sequelize.Op;
const errorCodes = require("../../common/errorCodes");

async function createOne(user) {
    if (!user.firstName || !user.lastName || !user.status) {
        throw new Error(errorCodes.WRONG_USER_PARAMS);
    }
    const dbUser = Users.build(user);
    await dbUser.save();
}

async function getAll() {
    return await Users.findAll() || [];
}

async function getOne(userId) {
    const user = await Users.findById(userId);
    if (!user) {
        throw new Error(errorCodes.NO_SUCH_USER);
    }
    return user;
}

async function editUser(user) {
    const dbUser = await Users.findById(user.userId);
    dbUser.name = user.name;
    dbUser.lastName = user.lastName;
    dbUser.status = user.status;
    await dbUser.save();
}

async function getEmptyUsers() {
    return await Users.findAll({
        where: {
            partyId: null,
            status: {
                [Op.or]: ["deputy", "unemployed"]
            }
        }
    })
}

async function getAllForParty(partyId) {
    return await Users.findAll({
        where: {
            partyId
        }
    })
}

module.exports = {
    createOne,
    getAll,
    getOne,
    editUser,
    getEmptyUsers,
    getAllForParty
};