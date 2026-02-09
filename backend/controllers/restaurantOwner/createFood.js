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
      restaurant,
      isAvailable,
    });
    res.status(201).json({ message: food });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

module.exports = createFood;