const mongoose = require('mongoose')

const expertiseSchema = mongoose.Schema({
    expertiseName: String,
    expertiseImage: [],
    slug: String,
    description: String,
    status: {
        type: String,
        default: 'pending'
    },
}, {
    timestamps: true
})

const expertiseModel = mongoose.model("expertise", expertiseSchema)
module.exports = expertiseModel