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
        },
        partyId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: "parties",
                key: "id"
            }
        }
    }, {timestamps: false});
    Users.associate = (models) => {
        models.users.belongsTo(models.parties, {
            as: "party",
            foreignKey: "partyId"
        });
        models.users.hasMany(models.news, {
            foreignKey: "userId"
        })
    };
    return Users;
};