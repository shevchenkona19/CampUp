const express = require('express');
const router = express.Router();
const Controller = require("../controllers/parties");

router.get("/allParties", async (req, res) => {
    try {
        const all = await Controller.getAllParties();
        return res.json({
            success: true,
            parties: all
        });
    } catch (e) {
        console.log(e.stack);
        return res.json({
            success: false,
            errorCode: e
        })
    }
});

router.post("/createParty", async (req, res) => {
    const params = req.body.params;
    try {
        await Controller.createParty(params);
        return res.json({
            success: true,
        });
    } catch (e) {
        console.log(e.stack);
        return res.json({
            success: false,
            errorCode: e
        })
    }
});

router.delete("/deleteParty", async (req, res) => {
    const partyId = req.query.id;
    try {
        await Controller.deleteParty(partyId);
        return res.json({
            success: true,
        })
    } catch (e) {
        console.log(e.stack);
        return res.json({
            success: false,
            errorCode: e
        })
    }
});

router.get("/party", async (req, res) => {
    const partyId = req.query.id;
    try {
        const party = await Controller.getParty(partyId);
        return res.json({
            success: true,
            party
        })
    } catch (e) {
        console.log(e.stack);
        return res.json({
            success: false,
            errorCode: e
        })
    }
});

sendError = error => ({success: false, errorCode: error});

module.exports = router;