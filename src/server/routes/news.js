const express = require('express');
const router = express.Router();
const Controller = require("../controllers/news");

router.post("/newNews", async (req, res) => {
    try {
        await Controller.createNews(req.body);
        return res.json({
            success: true,
        })
    } catch (e) {
        console.log(e.stack);
        return res.json(sendError(e))
    }
});

router.delete("/news", async (req, res) => {
    try {
        await Controller.deleteNews(req.query.newsId);
        return res.json({
            success: true,
        })
    } catch (e) {
        console.log(e.stack);
        return res.json(sendError(e))
    }
});

router.get("/all", async (req, res) => {
    try {
        return res.json({
            success: true,
            news: await Controller.getAllNews()
        })
    } catch (e) {
        console.log(e.stack);
        return res.json(sendError(e))
    }
});

router.get("/news", async (req, res) => {
    try {
        return res.json({
            success: true,
            news: await Controller.getOneNews(req.query.id)
        })
    } catch (e) {
        console.log(e.stack);
        return res.json(sendError(e))
    }
});

sendError = error => ({success: false, errorCode: error});

module.exports = router;