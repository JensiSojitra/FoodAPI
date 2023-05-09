module.exports = (app) => {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  const category = require("../controllers/category.controller");

  var router = require("express").Router();
  const authJwt = require("../middleware/authJwt");

  router.post("/category", category.create);
  router.get("/category", category.findAll);
  // router.get("/category", [authJwt.verifyToken, authJwt.isAdmin, authJwt.isFaculty], category.findAll);
  router.delete("/category/:id", category.delete);
  router.delete("/category", category.deleteAll);
  router.put("/category/:id", category.update);

  app.use("/api", router);
};
