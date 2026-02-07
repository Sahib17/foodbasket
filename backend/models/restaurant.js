const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const restaurantSchema = new Schema(        // name
  {                                         //
    name: {                                 //
      type: String,                         //
      required: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    contactNumber: {
      type: Number,
      required: true,
      trim: true,
    },
    contactEmail: {
      type: String,
      trim: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    image: {
      type: String,
    },
    rating: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Restaurant", restaurantSchema);
