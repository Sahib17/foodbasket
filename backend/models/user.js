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
      default: "https://media.istockphoto.com/id/2151669184/vector/vector-flat-illustration-in-grayscale-avatar-user-profile-person-icon-gender-neutral.jpg?s=612x612&w=0&k=20&c=UEa7oHoOL30ynvmJzSCIPrwwopJdfqzBs0q69ezQoM8="
    },
    role: {
      type: String,
      enum: ["USER", "ADMIN", "RESTAURANT_OWNER", "BANNED_USER"],
      default: "USER",
    },
    refreshToken: {
      type: String,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("User", userSchema);
