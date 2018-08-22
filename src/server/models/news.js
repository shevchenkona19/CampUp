module.exports = (db, DataTypes) => {
    const News = db.define("news", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
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
    return News;
};