const dbConfig = require("../config/db.config");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.menu = require("./menu.model")(mongoose);
db.category = require("./category.model")(mongoose);
db.table = require("./table.model")(mongoose);
db.user = require("./user.model");
db.role = require("./role.model");
db.review = require("./review.model")(mongoose);
db.order = require("./order.model")(mongoose);
db.adminRegister = require("./adminregister.model");

db.ROLES = ["user", "admin"];

module.exports = db;
