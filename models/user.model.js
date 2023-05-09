const mongoose = require("mongoose");

const User = mongoose.model(
    "User",
    new mongoose.Schema({

        firstname: String,
        lastname: String,
        phone: Number,
        password: String,
        roles: {
            type: mongoose.Schema.Types.String,
            ref: "Role"
        }
    })
);

module.exports = User;