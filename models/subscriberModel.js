const mongoose = require('mongoose')

const subscriberSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
        required: true,
        unique: true,
    },
}, {
    timestamps: true
})

const subscriberModel = mongoose.model("subscriber", subscriberSchema)

module.exports = subscriberModel