const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
    name: {
        type: String,
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
    email: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    food: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "food",
    }],
    rating: {
        type: Number,
    }
})

module.exports = mongoose.model('Restaurant', restaurantSchema)