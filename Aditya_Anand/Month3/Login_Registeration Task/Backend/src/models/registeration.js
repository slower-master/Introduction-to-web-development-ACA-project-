const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email : {
        type:String,
        required:true,
        unique:true
    },
    password : {
        type:String,
        required: true
    }
})

const register = new mongoose.model("Register", userSchema);

module.exports = register;