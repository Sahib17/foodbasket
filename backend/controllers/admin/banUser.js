const restaurantModel = require("../../models/restaurant");
const userModel = require("../../models/user");

const banUser = async (req, res) => {
  const { id: userid } = req.params;
  
  if(req.user.userid === userid){
    return res.status(400).json({message: "you cannot ban yourself"})
  }
  try {
    const user = await userModel.findById( userid );
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    if (user.role !== "ADMIN") {
      user.role = "ADMIN";
      await user.save();
      return res
        .status(200)
        .json({ success: true, _id: user._id, role: user.role });
    } else {
      const restaurant = await restaurantModel.findOne({ owner: userid });
      if (!restaurant) {
        user.role = "USER";
        await user.save();
        return res
          .status(200)
          .json({ success: true, _id: user._id, role: user.role });
      } else {
        user.role = "RESTAURANT_OWNER";
        await user.save();
        return res
          .status(200)
          .json({ success: true, _id: user._id, role: user.role });
      }
    }
  } catch (error) {
    return res.status(400).json({ success: false, error: error.message });
  }
};

module.exports = banUser;
