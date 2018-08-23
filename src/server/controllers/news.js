const News = require("../models/index").getNewsModel();

async function getAllNews() {
    return await News.findAll();
}

async function createNews(news) {
    await News.build(news).save();
}

async function deleteNews(newsId) {
    await News.destroy({where: {id: newsId}});
}

async function getOneNews(newsId) {
    return await News.findById(newsId);
}

module.exports = {
    getAllNews,
    createNews,
    deleteNews,
    getOneNews
};