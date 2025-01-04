const mongoose = require('mongoose')

const projectSchema = mongoose.Schema({
    projectType: String,
    projectImage: [],
    status: {
        type: String,
        default: 'pending'
    },
}, {
    timestamps: true
})

const projectModel = mongoose.model("project", projectSchema)
module.exports = projectModel