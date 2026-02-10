const userModel = require("../../models/user");

const getUser = async (req, res) => {
  try {
    const user = await userModel.findOne({_id: req.user.userid});
    return res.status(200).json(user);
  } catch (error) {
    return res.status(400).json(error);
  }
};

module.exports = getUser;