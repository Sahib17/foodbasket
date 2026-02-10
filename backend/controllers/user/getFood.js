const foodModel = require("../../models/food");

const getFood = async (req, res) => {
  try {
    const foods = await foodModel.find({ restaurant: req.params.id });
    res.status(200).json(foods);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = getFood;
