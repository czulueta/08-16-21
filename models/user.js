const mongoose = require("mongoose")
const { toUnicode } = require("punycode")
const Schema = mongoose.Schema

const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    }
})
module.exports = mongoose.model("User", userSchema)