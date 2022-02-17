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
});


module.exports = mongoose.model('Birthday', BirthdaySchema)