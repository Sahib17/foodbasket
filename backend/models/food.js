const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
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
    cart: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "cart",
    },
    inStock: {
        type: Boolean,
        required: true,
        default: true,
    },
    price: {
        type: Number,
        required: true,
    }
})

module.exports = mongoose.model('user', userSchema)