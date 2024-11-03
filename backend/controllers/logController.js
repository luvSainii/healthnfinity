// controllers/logController.js
const Log = require("../models/log");

// Get all logs
exports.getAllLogs = async (req, res) => {
  try {
    const logs = await Log.find().populate('userId', 'name email'); // Populating user details
    res.status(200).json(logs);
  } catch (error) {
    console.error("Error fetching logs:", error);
    res.status(500).json({ message: "Failed to fetch logs." });
  }
};
