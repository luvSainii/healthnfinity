// routes/logRoutes.js
const express = require("express");
const Log = require("../models/log")
const auth = require("../middlewares/auth")
const { getAllLogs } = require("../controllers/logController");
const router = express.Router();

router.get("/logs", getAllLogs);
    router.put("/logs/delete/:id", async (req, res) => {
        await Log.findByIdAndUpdate(req.params.id, { deleted: true });
        res.status(200).json({ message: "Log marked as deleted" });
    });

module.exports = router;
