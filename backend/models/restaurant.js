const mongoose = require("mongoose");
const foodModel = require("./food");

const Schema = mongoose.Schema;

const restaurantSchema = new Schema(        // name: String
  {                                         // address: String
    name: {                                 // contactNumber: String
      type: String,                         // contactEmail: String
      required: true,                       // owner: id user
      trim: true,                           // image: String
    },                                      // rating: Number
    address: {
      type: String,
      required: true,
      trim: true,
    },
    contactNumber: {
      type: String,
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
      default: "https://media.istockphoto.com/id/148291529/photo/restaurant-signage.jpg?s=612x612&w=0&k=20&c=st4S1W9K0_JmpeEY0fVVKPT2Ve8xDwuebSY9xQPqcRE="
    },
    rating: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true },
);

restaurantSchema.pre("findOneAndDelete", async function (next) {
  const restaurantId = this.getQuery()._id;
  await foodModel.deleteMany({ restaurant: restaurantId });
  next();
});


module.exports = mongoose.model("Restaurant", restaurantSchema);
