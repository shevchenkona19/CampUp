const express = require('express');
const router = express.Router();
const Controller = require("../controllers/users");

router.post("/create", async (req, res) => {
    try {
        await Controller.createOne(req.body);
        return res.json({
            success: true,
        })
    } catch (e) {
        console.error(e);
        return res.json({
            success: false,
            errorCode: e
        });
    }
});

router.delete("/user", async (req, res) => {
    try {
        await Controller.deleteUser(req.query.id);
        return res.json({
            success: true,
        })
    } catch (e) {
        console.error(e);
        return res.json({
            success: false,
            errorCode: e
        });
    }
});

router.get("/all", async (req, res) => {
    try {
        return res.json({
            success: true,
            users: await Controller.getAll()
        })
    } catch (e) {
        console.error(e);
        return res.json({
            success: false,
            errorCode: e
        });
    }
});

router.get("/one", async (req, res) => {
    try {
        return res.json({
            success: true,
            user: await Controller.getOne(req.query.userId)
        })
    } catch (e) {
        console.error(e);
        return res.json({
            success: false,
            errorCode: e
        })
    }
});

router.post("/edit", async (req, res) => {
    try {
        await Controller.editUser(req.body.user);
        return res.json({
            success: true,
        })
    } catch (e) {
        console.error(e);
        return res.json({
            success: false,
            errorCode: e
        })
    }
});

router.get("/emptyUsers", async (req, res) => {
    try {
        return res.json({
            success: true,
            users: await Controller.getEmptyUsers()
        })
    } catch (e) {
        console.error(e);
        return res.json({
            success: false,
            errorCode: e
        })
    }
});

router.get("/allForParty", async (req, res) => {
    try {
        return res.json({
            success: true,
            users: await Controller.getAllForParty(req.query.partyId)
        })
    } catch (e) {
        console.error(e);
        return res.json({
            success: false,
            errorCode: e
        })
    }
});

module.exports = router;
