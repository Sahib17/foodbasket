// requirements
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const userModel = require("../../models/user");

const loginUser = async (req, res) => {

  // get email, password from body
  let { email, password } = req.body;

  // if no email or password entered, throw error
  if (!email || !password) {
    return res.status(400).json({ mesage: "fill in both the fields" });
  }

  // find user by email
  let user = await userModel.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: "Invalid email or password" });
  } else {

    // compare password entered with hash
    bcrypt.compare(password, user.password, (error, result) => {
      if (error) {
        return res.status(500).json({ message: "Server Error" });
      } else if (!result) {
        return res.status(400).json({ message: "Invalid email or password" });
      } else {

        // create token and send to cookie
        let token = jwt.sign(
          {
            email,
            userid: user._id,
          },
          process.env.SECRET,
        );
        return res
          .cookie("token", token)
          .status(200)
          .json({ message: "logged in" });
      }
    });
  }
};

module.exports = loginUser;
