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
        body: {
            type: DataTypes.STRING(10000),
        },
        creator: {
            type: DataTypes.STRING,
        }
    }, {timestamps: false});

    return Laws;
};