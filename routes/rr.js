const mongoose = require("mongoose");
const formSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    cardnum: {
        type: String,
        required: true
    },
    month: {
        type: Number,
        required: true
    },
    year: {
        type: Number,
        required: true

    },
    csv: {
        type: Number,
        required: true
    }
})
const Register = new mongoose.model("Register", formSchema)
module.exports = Register