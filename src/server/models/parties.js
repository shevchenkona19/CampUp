module.exports = (db, DataTypes) => {
    const Parties = db.define("parties", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.STRING,
        },
        ideology: {
            type: DataTypes.STRING,
        }
    });
    return Parties;
};