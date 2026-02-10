const foodModel = require("../../models/food");

const createFood = async (req, res) => {
  const { name, description, price, image, restaurant, isAvailable } = req.body;
  if (!name || !price || !restaurant) {
    return res.status(400).json({ message: "please fill in all the fields" });
  }
  try {
    const food = await foodModel.create({
      name,
      description,
      price,
      image,
      restaurant: req.params.id,
      isAvailable,
    });
    res.status(201).json({ success: true, message: food });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = createFood;