const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const userModel = require("../../models/user");

const createUser = async (req, res) => {
  try {
    // get these stuff from body
    const { firstName, lastName, email, password, image, role } = req.body;

    // if either of these values are not available, send err
    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({ message: "Missing fields" });
    }

    // if existing user, don't create user again
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already registered" });
    }

    // hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create user
    const user = await userModel.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      image,
      role,
    });

    // sign token
    const token = jwt.sign(
      { email, userid: user._id },
      process.env.SECRET
    );

    // send token to cookie
    res.cookie("token", token, { httpOnly: true });
    return res.status(200).json({ user });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};


module.exports = createUser;
