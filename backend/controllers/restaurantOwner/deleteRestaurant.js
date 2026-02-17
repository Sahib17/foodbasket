const foodModel = require("../../models/food");
const restaurantModel = require("../../models/restaurant");

const deleteRestaurant = async (req, res) => {
  const { restaurantId } = req.params;
  try {
    const restaurant = await restaurantModel.findById(restaurantId);
    if (!restaurant) {
      return res
        .status(404)
        .json({ success: false, message: "Restaurant not found" });
    }
    if(req.user.role !== "ADMIN" && req.user.userid !== restaurant.owner){
        return res.status(403).json({success: false, message: "Unauthorized"})
    }
    // await foodModel.deleteMany({restaurant: restaurantId});
    await restaurantModel.findOneAndDelete({_id: restaurantId})
    return res.status(200).json({success: true, message: "restaurant and associated food deleted"})
  } catch (error) {
    return res.status(500).json({error: error.message})
  }
};

module.exports = deleteRestaurant