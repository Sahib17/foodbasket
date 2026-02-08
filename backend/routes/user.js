const express = require("express");
const router = express.Router();
const isLoggedIn = require("../middleware/isLoggedIn");

const { test, createRestaurant } = require("../controllers/user/index");

// CREATE user
router.get("/test", isLoggedIn, test);

router.post('/createRestaurant', isLoggedIn, createRestaurant)

module.exports = router;
