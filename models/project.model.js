const mongoose = require('mongoose')

const projectSchema = mongoose.Schema({
    projectName: String,
    projectType: String,
    projectImage: [],
    completionDate: String,
    slug: String,
    projectAddress: String,
    description: String,
    status: { 
        type: String,
        default: 'pending'
    },
}, {
    timestamps: true
})

const projectModel = mongoose.model("product", projectSchema)
module.exports = projectModel