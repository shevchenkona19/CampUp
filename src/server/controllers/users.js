const Users = require("../models/index").getUsersModel();
const Parties = require("../models/index").getPartiesModel();
const Op = require("../models/index").getDb().Sequelize.Op;
const errorCodes = require("../../common/errorCodes");

async function createOne(user) {
    if (!user.firstName || !user.lastName) {
        throw new Error(errorCodes.WRONG_USER_PARAMS);
    }
    user.status = "unemployed";
    const dbUser = Users.build(user);
    await dbUser.save();
}

async function getAll() {
    return await Users.findAll() || [];
}

async function getOne(userId) {
    const user = await Users.findOne({
        where: {id: userId},
        include: [
            {model: Parties, required: false, as: "party"}
        ]
    });
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

async function deleteUser(id) {
    await Users.destroy({where: {id}});
}

module.exports = {
    createOne,
    getAll,
    getOne,
    editUser,
    getEmptyUsers,
    getAllForParty,
    deleteUser,
};