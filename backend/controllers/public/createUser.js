const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const userModel = require("../../models/user");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const createUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password, image, role } = req.body;

    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({ message: "Missing fields" });
    }

    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await userModel.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      image,
      role,
    });

    const token = jwt.sign(
      { email, userid: user._id },
      process.env.SECRET
    );

    res.cookie("token", token, { httpOnly: true });
    return res.status(200).json({ user });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};


module.exports = createUser;
