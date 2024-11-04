// routes/auth.js
const express = require("express");
const authController = require("../controllers/authController");
const auth = require("../middlewares/auth");
const router = express.Router();

// Signup route
router.post("/signup", authController.signup);

// Login route
router.post("/login", authController.login);

// Logout route
router.post("/logout", authController.logout);

module.exports = router;
