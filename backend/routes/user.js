const express = require("express");
const router = express.Router();
const isLoggedIn = require("../middleware/isLoggedIn");

const { test, createRestaurant, getRestaurants, getFood, getUser } = require("../controllers/user/index");

// CREATE user
router.get("/test", isLoggedIn, test);

router.post('/createRestaurant', isLoggedIn, createRestaurant)

router.get('/getRestaurants', isLoggedIn, getRestaurants);

router.get('/:id/getFood', isLoggedIn, getFood);

router.get('/getUser', isLoggedIn, getUser);

module.exports = router;
