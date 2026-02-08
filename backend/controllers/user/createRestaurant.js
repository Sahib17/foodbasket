const restaurantModel = require("../../models/restaurant");
const userModel = require("../../models/user");

const createRestaurant = async (req, res) => {
  const { name, address, contactNumber, contactEmail, image } = req.body;
  if (!name || !address || !contactNumber || !contactEmail) {
    return res.status(400).json({ message: "Add in all fields" });
  }
  try {
    const restaurant = await restaurantModel.create({
      name,
      address,
      contactNumber,
      contactEmail,
      owner: req.user.userid,
    });
    const user = await userModel.findOne({ email: req.user.email });
    if (user.role !== "ADMIN") {
      user.role = "RESTAURANT_OWNER";
      await user.save();
    }
    return res.status(201).json({ message: { restaurant } });
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};

module.exports = createRestaurant;
