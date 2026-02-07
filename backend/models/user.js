const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(          // *firstname: String
  {                                     // *lastName: String
    firstName: {                        // *email: String
      type: String,                     // *password: hash (String)
      required: true,                   // image: String
      trim: true,                       // *role: String
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    role: {
      type: String,
      enum: ["USER", "ADMIN", "RESTAURANT_OWNER"],
      default: "USER",
    },
    refreshToken: {
      type: String,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("User", userSchema);
