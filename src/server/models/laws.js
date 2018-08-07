module.exports = (db, DataTypes) => {
    const Laws = db.define("laws", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.STRING,
        },
        partyId: {
            type: DataTypes.INTEGER
        }
    });
    return Laws;
};