const restaurantModel = require("../models/restaurant");
const user = require("../models/user");

const isRestaurantOwner = async (req, res, next) => {
  // const {restaurant} = req.body;
  console.log(req.user);
  const existingUser = await user.findOne({ email: req.user.email });
  console.log(existingUser);
  console.log(existingUser.role);

  if (
    existingUser.role === "ADMIN" ||
    existingUser.role === "RESTAURANT_OWNER"
  ) {
    // const existingRestaurant = await restaurantModel.findOne({_id: restaurant});
    // if()
    return next();
  }
  return res.status(403).json({ message: "Access denied" });
};

module.exports = isRestaurantOwner;
