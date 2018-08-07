const sequelize = require("../db/db").sequelize;
const Sequelize = require("../db/db").Sequelize;
const fs = require("fs");
const path = require("path");

let db = {};

fs.readdirSync(__dirname)
    .filter(file => {
        return file !== "index.js" && file !== "db.js";
    })
    .forEach(file => {
        const model = sequelize.import(path.join(__dirname, file));
        db[model.name] = model;
    });

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});
db.sequelize = sequelize;
db.Sequelize = Sequelize;

const Models = db.sequelize.models;
Models.userParty.removeAttribute("id");
Models.parties.hasMany(Models.users);
Models.users.belongsTo(Models.parties);
sequelize.sync();


module.exports = {
    getPartiesModel: () => Models.parties,
    getCountryModel: () => Models.country,
    getLawModel: () => Models.laws,
    getNewsModel: () => Models.news,
    getUserPartyModel: () => Models.userParty,
    getUsersModel: () => Models.users,
    getDb: () => db,
};