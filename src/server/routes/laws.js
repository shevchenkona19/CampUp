const express = require('express');
const router = express.Router();
const Controller = require("../controllers/laws");

router.post("/newLaw", async (req, res) => {
    try {
        await Controller.createLaw(req.body);
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
        await Controller.deleteLaw(req.query.lawId);
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
            laws: await Controller.getAllLaws()
        })
    } catch (e) {
        console.log(e.stack);
        return res.json(sendError(e))
    }
});

router.get("/law", async (req, res) => {
    try {
        return res.json({
            success: true,
            law: await Controller.getOneLaw(req.query.id)
        })
    } catch (e) {
        console.log(e.stack);
        return res.json(sendError(e))
    }
});

router.get("/search", async (req, res) => {
    try {
        return res.json({
            success: true,
            laws: await Controller.searchLaws(req.query.query)
    })
    } catch (e) {
        console.log(e.stack);
        return res.json(sendError(e))
    }
});

sendError = error => ({success: false, errorCode: error});

module.exports = router;