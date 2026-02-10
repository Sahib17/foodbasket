const restaurantModel = require("../../models/restaurant")

const getRestaurants = async (req, res) => {
    try{
        const restaurants = await restaurantModel.find();
        res.status(201).json(restaurants);
    } catch (error) {
        res.status(500).json({message: "Server Error"})
    }
}

module.exports = getRestaurants;