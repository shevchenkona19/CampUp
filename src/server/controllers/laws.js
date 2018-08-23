const Laws = require("../models/index").getLawModel();

async function getAllLaws() {
    return await Laws.findAll();
}

async function createLaw(law) {
    await Laws.build(law).save();
}

async function deleteLaw(lawId) {
    await Laws.destroy({where: {id: lawId}});
}

async function searchLaws(query) {
    const foundLaws = await Laws.findAll({
        where: {
            [Op.or]: [
                {title: {[Op.like]: "%" + query + "%"}},
                {body: {[Op.like]: "%" + query + "%"}},
                {creator: {[Op.like]: "%" + query + "%"}}
            ]
        }
    });
    if (foundLaws === null) return [];
    else return foundLaws;
}

async function getOneLaw(lawId) {
    return await Laws.findById(lawId);
}

module.exports = {
    getAllLaws,
    createLaw,
    deleteLaw,
    searchLaws,
    getOneLaw
};