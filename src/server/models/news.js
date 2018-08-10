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
        },
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: "users",
                key: "id"
            }
        }
    }, {timestamps: false});
    News.associate = models => {
          models.news.belongsTo(models.users, {
              foreignKey: "userId",
              as: "user"
          })
    };
    return News;
};