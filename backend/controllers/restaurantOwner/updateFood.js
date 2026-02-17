const foodModel = require("../../models/food");

const updateFood = async (req, res) => {
  const { name, description, price, image, isAvailable } = req.body;
  const { foodId } = req.params;
  try {
    const food = await foodModel.findOneAndUpdate(
      { _id: foodId },
      {
        name,
        description,
        price,
        image,
        isAvailable,
      },
      { new: true, runValidators: true },
    );
    if (!existingFood) {
      return res
        .status(404)
        .json({ success: false, message: "Food not found" });
    }

    return res.status(200).json({ success: true, data: food });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = updateFood;