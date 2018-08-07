module.exports = (db, DataTypes) => {
    const Users = db.define("users", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        firstName: {
            type: DataTypes.STRING,
        },
        lastName: {
            type: DataTypes.STRING,
        },
        status: {
            type: DataTypes.STRING
        }
    });
    return Users;
};