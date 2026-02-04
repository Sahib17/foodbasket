const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const partnerSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
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

module.exports = mongoose.model('user', userSchema)