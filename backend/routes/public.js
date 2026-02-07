// Requirements
const express = require("express");
const router = express.Router();

// Reference to Controllers
const {
  createUser,
  loginUser,
  logoutUser,
} = require("../controllers/public/index");

// CREATE user
router.post("/register", createUser);

// LOGIN user
router.post("/login", loginUser);

// LOGOUT user
router.post("/logout", logoutUser);

module.exports = router;
