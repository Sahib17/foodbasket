const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cartSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
    food: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    }]
})

module.exports = mongoose.model('user', userSchema)