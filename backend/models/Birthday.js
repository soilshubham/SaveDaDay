const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const BirthdaySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    birthday: {
        type: Date,
        required: true,
    },
    desc: {
        type: String,
        required: false,
        default: "",
    },
});


module.exports = mongoose.model('Birthday', BirthdaySchema)