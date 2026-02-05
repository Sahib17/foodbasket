const jwt = require("jsonwebtoken");
require("dotenv").config();
const bcrypt = require("bcrypt");
const userModel = require("../../models/user");
const mongoose = require("mongoose");

const createUser = async (req, res) => {
  const { firstName, lastName, email, password, image, role } = req.body;

  let emptyFields = [];

  if (!firstName) emptyFields.push("firstname");
  if (!lastName) emptyFields.push("lastname");
  if (!email) emptyFields.push("lastname");
  if (!password) emptyFields.push("lastname");

  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "please fill in all the fields ", emptyFields });
  }

  let user = await userModel.findOne({ email });
  if (user) {
    return res.status(500).json({ message: "user already registered" });
  } else {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(password, salt, async (err, hash) => {
        try{
        let user = await userModel.create({
          firstName,
          lastName,
          email,
          password: hash,
          image,
          role,
        });
        
        let token = jwt.sign(
          {
            email,
            userid: user._id,
          },
          process.env.SECRET,
        );
        return res.cookie('token', token).status(200).json({user})
        } catch(error){
            res.status(400).json({message: 'some err'})
        }
        
        
      });
    });
  }
};

module.exports = createUser;
