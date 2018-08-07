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
        description: {
            type: DataTypes.STRING,
        },
        creatorId: {
            type: DataTypes.INTEGER,
        }
    });
    return News;
};