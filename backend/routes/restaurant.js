const express = require("express");
const router = express.Router();
const isLoggedIn = require("../middleware/isLoggedIn");
const isRestaurantOwner = require("../middleware/isRestaurantOwner");

// Reference to Controllers
const {
  test, createFood
} = require("../controllers/restaurantOwner/index");


// CREATE food
router.get('/test', isLoggedIn, isRestaurantOwner, test);

router.post('/createFood', isLoggedIn, isRestaurantOwner, createFood)

module.exports = router;
