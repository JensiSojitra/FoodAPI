

const mongoose = require("mongoose");

const Adminregister = mongoose.model(
    "Adminregister",
    new mongoose.Schema({
        name: String,
        email: String,
        password: String,
        phone: Number,
        roles: [{
            type: mongoose.Schema.Types.String,
            ref: "Role"
        }]
    })
);

module.exports = Adminregister;