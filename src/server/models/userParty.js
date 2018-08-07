module.exports = (db, DataTypes) => {
    const UserParty = db.define("userParty", {
        userId: {
            type: DataTypes.INTEGER,
        },
        partyId: {
            type: DataTypes.INTEGER,
        }
    });
    return UserParty;
};