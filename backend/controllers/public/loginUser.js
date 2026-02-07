const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const userModel = require("../../models/user");
const mongoose = require("mongoose");

const loginUser = async (req, res) => {
  console.log(req.body);
  let { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ mesage: "fill in both the fields" });
  }
  let user = await userModel.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: "Invalid email or password" });
  } else {
    bcrypt.compare(password, user.password, (error, result) => {
      if (error) {
        return res.status(500).json({ message: "Server Error" });
      } else if (!result) {
        return res.status(400).json({ message: "Invalid email or password" });
      } else {
        let token = jwt.sign(
          {
            email,
            userid: user._id,
          },
          process.env.SECRET,
        );
        // console.log(token);
        return res
          .cookie("token", token)
          .status(200)
          .json({ message: "logged in" });
      }
    });
  }
};

module.exports = loginUser;
