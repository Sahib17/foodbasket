const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const foodSchema = new Schema({
    Name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    email: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    inStock: {
        type: Boolean,
        required: true,
        default: true,
    },
    price: {
        type: Number,
        required: true,
    },
    rating: {
        type: Number,
    },
    restaurant:{
        
    }
})

module.exports = mongoose.model('Food', foodSchema)