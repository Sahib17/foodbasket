const foodModel = require("../../models/food");

const deleteFood = async (req, res) => {
  const { restaurantId, foodId } = req.params;
  try {
    const food = await foodModel.findById(foodId);
    if (!food) {
      return res
        .status(404)
        .json({ success: false, message: "Food not found" });
    } else if (restaurantId !== food.restaurant.toString()) {
      return res
        .status(403)
        .json({ success: false, message: "Unauthorized" });
    }

    await foodModel.findOneAndDelete({_id: foodId})
    return res.status(200).json({success: true, message: "Food Deleted Successfully"});
  } catch (error) {
    return res.status(500).json({error: error.message})
  }
};

module.exports = deleteFood