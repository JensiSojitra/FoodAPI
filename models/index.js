const dbConfig = require("../config/db.config");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.menu = require("./menu.model")(mongoose);
db.category = require("./category.model")(mongoose);
db.table = require("./table.model")(mongoose);
db.review = require("./review.model")(mongoose);
db.order = require("./order.model")(mongoose);
db.tutorials = require("./image.model")(mongoose);
db.userPrint = require("./userPrint.model");
db.adminRegister = require("./adminregister.model");


module.exports = db;
