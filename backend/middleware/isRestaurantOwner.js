const user = require("../models/user");

const isRestaurantOwner = async (req, res, next) => {
    console.log(req.user);
    console.log(req.user.role);
    const existingUser = await user.findOne({ email: req.user.email });
    console.log(existingUser);
    console.log(existingUser.role);
    
  if (existingUser.role === "ADMIN" || existingUser.role === "RESTAURANT_OWNER") {
    return next();
  }
  return res.status(403).json({ message: "Access denied" });
};


module.exports = isRestaurantOwner;