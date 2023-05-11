// ==============================================================================
const express = require("express");
const cors = require("cors");

const expressValidator = require("express-validator");
const app = express();

global.__basedir = __dirname;
// =========================================================================
//react na localhost sathe connect krva mate
var corsOptions = {
  origin: "*",
};
// =========================================================================

// =========================================================================
//server ne mongoos sathe connect krva mate
const db = require("./models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection Successfully...");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });
app.use(cors(corsOptions));
// =========================================================================

// parse requests of content-type - application/json
app.use(express.json());
app.use(expressValidator());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// =========================================================================
//routes mathi app import kravyu(route import)
require("./routes/menu.routes")(app);
require("./routes/category.routes")(app);
require("./routes/review.route")(app);
require("./routes/order.routes")(app);
require("./routes/adminregister.route")(app);
require("./routes/table.routes")(app);
require("./routes/userPrint.route")(app);
require("./routes/image.routes")(app);

// =========================================================================

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Food delivery application." });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
