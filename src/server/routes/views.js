const express = require('express');
const path = require('path');
const router = express.Router();

router.get("/admin*", (req, res) => res.sendFile(path.join(__dirname, "../../client/admin/index.html")));

router.get("/user*", (req, res) => res.sendFile(path.join(__dirname, "../../    client/user/index.html")));

module.exports = router;