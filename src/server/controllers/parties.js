const Parties = require("../models/index").getPartiesModel();
const Users = require("../models/index").getUsersModel();
const ErrorCodes = require("../../common/errorCodes");

async function getAllParties() {
    const all = await Parties.findAll({
        include: [
            {model: Users, required: false}
        ]
    });
    if (all === null) {
        throw new Error(ErrorCodes.EMPTY_PARTIES)
    }
    return all;
}

async function createParty(params) {
    if (!params.name) {
        throw new Error(ErrorCodes.NO_PARTY_NAME);
    }
    if (!params.description) {
        throw new Error(ErrorCodes.NO_PARTY_DESCRIPTION);
    }
    if (!params.ideology) {
        throw new Error(ErrorCodes.NO_PARTY_IDEOLOGY);
    }
    const newParty = Parties.build({
        name: params.name,
        description: params.description,
        ideology: params.ideology,
    });
    await newParty.save();
}

async function deleteParty(partyId) {
    await Parties.destroy({where: {id: partyId}});
}

async function getParty(partyId) {
    const party = await Parties.findOne({
        where: {id: partyId},
        include: [
            Users
        ]
    });
    if (!party) {
        throw new Error(ErrorCodes.NO_SUCH_PARTY)
    }
    return party;
}

async function addToParty(params) {
    const partyId = params.partyId, userId = params.userId;
    const user = await Users.findById(userId);
    user.partyId = partyId;
    user.status = "deputy";
    await user.save();
}

async function removeFromParty(userId) {
    const user = await Users.findById(userId);

    user.partyId = null;
    user.status = "unemployed";

    await user.save();
}

module.exports = {
    getAllParties,
    createParty,
    deleteParty,
    getParty,
    addToParty,
    removeFromParty
};