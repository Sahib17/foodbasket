const restaurantModel = require("../../models/restaurant");

const updateRestaurant = async (req, res) => {
    try {
        const {restaurantId} = req.params;

        const restaurant = await restaurantModel.findById(restaurantId);
        if(!restaurant){
            return res.status(404).json({success: false, message: "No Restaurant Found"});
        }
        if(req.user.role !== "ADMIN" && req.user.userid !== restaurant.owner.toString()){
            return res.status(403).json({success: false, message: "Unauthorized"})
        }
        const updates = {};
        const allowedFields = ['name', 'address', 'contactNumber', 'contactEmail', 'image'];

        allowedFields.forEach(field => {
            if(req.body[field] !== undefined) {
                updates[field] = req.body[field];
            }
        })
    
        const updatedRestaurant = await restaurantModel.findByIdAndUpdate(restaurantId, updates, {new: true, runValidators: true});
        return res.status(200).json({
            success: true,
            message: "Restaurant updated",
            data: updatedRestaurant,
        });
    } catch (error) {
        res.status(500).json({success: false, message: error.message})
    }
}