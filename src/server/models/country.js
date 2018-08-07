module.exports = (db, DataTypes) => {
    const Country = db.define("country", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
        },
        president: {
            type: DataTypes.STRING,
        },
        budget: {
            type: DataTypes.INTEGER,
        }
    });
    return Country;
};