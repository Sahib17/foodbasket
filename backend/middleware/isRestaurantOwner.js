const restaurantModel = require("../models/restaurant");
const user = require("../models/user");

const isRestaurantOwner = async (req, res, next) => {
  const restaurant = req.params.id;
  const existingUser = await user.findOne({ _id: req.user.userid });

  if (existingUser.role === "ADMIN") {
    return next();
  } else if (existingUser.role === "RESTAURANT_OWNER") {
    const existingRestaurant = await restaurantModel.findOne({
      _id: restaurant,
    });
    if (existingRestaurant.owner.equals(req.user.userid)) {
      return next();
    } else {
      return res.status(403).json({ message: "not the owner" });
    }
  }
  return res.status(403).json({ message: "Access denied" });
};

module.exports = isRestaurantOwner;
