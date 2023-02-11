const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    fisrtName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    qualification: {
        type: String,
        required: true
    },

})

module.exports = mongoose.Model('user',userSchema)