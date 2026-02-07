const express = require("express");
const router = express.Router();

const {
  createUser,
  loginUser,
  logoutUser,
} = require("../controllers/public/index");

// CREATE user
// router.post("/", createUser);
router.post("/register", createUser);

// LOGIN user
router.post("/login", loginUser);

// LOGIN user
router.post("/logout", logoutUser);

module.exports = router;
