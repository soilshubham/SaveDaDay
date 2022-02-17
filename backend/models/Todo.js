const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const TodoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    }
});


module.exports = mongoose.model('Todo', TodoSchema)