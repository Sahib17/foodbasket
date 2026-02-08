const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const foodSchema = new Schema(                // name: String
  {                                           // description: String
    name: {                                   // image: String
      type: String,                           // restaurant: id restaurant
      required: true,                         // price: Number
      trim: true,                             
    },
    description: {
      type: String,
      trim: true,
    },
    price: {
      type: Number,
      required: true
    },
    image: String,
    restaurant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Restaurant",
      required: true,
    },
    isAvailable: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Food", foodSchema);
