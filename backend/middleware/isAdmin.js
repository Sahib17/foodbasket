const user = require("../models/user");

const isAdmin = async (req, res, next) => {
    console.log(req.user);
    console.log(req.user.role);
    const existingUser = await user.findOne({ email: req.user.email });
    console.log(existingUser);
    console.log(existingUser.role);
    console.log(req.user.userid);
    
    
  if (existingUser.role === "ADMIN") {
    return next();
  }
  return res.status(403).json({ message: "Access denied" });
};


module.exports = isAdmin;