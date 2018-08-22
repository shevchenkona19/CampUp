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
        rating: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false,
        },
        ideology: {
            type: DataTypes.STRING,
        }
    }, {timestamps: false});
    Parties.associate = models => {
        models.parties.hasMany(models.users, {
            foreignKey: "partyId"
        })
    };
    return Parties;
};