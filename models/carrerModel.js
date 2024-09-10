const mongoose = require('mongoose')

const carrerSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    salutation:{
        type: String,
        required: true,
        enum: ['Mr', 'Ms', 'Mrs', 'Dr', 'Prof'],
    },
    email:{
        type: String,
        required: true
    },
    phoneNumber:{
        type: String,
        required: true
    },
    resume:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true,
        enum: ['Male', 'Female'],
    },
    age:{
        type: String,
        required: true,
        enum: ['16-19', '20-24', '25-29', '30-34']
    },
    address:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
},{
    timestamps:true
})

module.exports = mongoose.model("Carrer",carrerSchema)