const express = require("express");
const router = express.Router();
const isLoggedIn = require("../middleware/isLoggedIn");

const {
  test,
} = require("../controllers/user/index");


// CREATE user
router.get('/test', isLoggedIn, test);

module.exports = router;
