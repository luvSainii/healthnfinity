// models/Log.js
const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const logSchema = new mongoose.Schema({
  actionType: { type: String, required: true }, // e.g., 'login', 'logout'
  timestamp: { type: Date, default: Date.now }, // General timestamp
  loginTimestamp: { type: Date },               // Login time
  logoutTimestamp: { type: Date },              // Logout time
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  role: { type: String, enum: ["admin", "user"], required: true },
});

// Use the AutoIncrement plugin to set 'id' as an auto-incrementing field
logSchema.plugin(AutoIncrement, { inc_field: "id" });

module.exports = mongoose.model("Log", logSchema);
