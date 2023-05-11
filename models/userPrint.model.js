const mongoose = require("mongoose");

const UserPrint = mongoose.model(
    "UserPrint",
    new mongoose.Schema({

        firstname: String,
        phone: Number,
        password: String
    })
);

module.exports = UserPrint;