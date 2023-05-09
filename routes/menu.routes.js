module.exports = app => {

    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    const menu = require("../controllers/menu.controller");

    var router = require("express").Router();
    const authJwt = require("../middleware/authJwt");


    router.post("/menu", menu.create);
    router.get("/menu", menu.findAll);
    // router.get("/menu", [authJwt.verifyToken, authJwt.isAdmin, authJwt.isFaculty], menu.findAll);
    router.delete("/menu/:id", menu.delete);
    router.delete("/menu", menu.deleteAll);
    router.put("/menu/:id", menu.update);



    app.use('/api', router);

}
