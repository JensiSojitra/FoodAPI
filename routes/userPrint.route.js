module.exports = app => {
    const userPrint = require("../controllers/userPrint.controller");
    var router = require("express").Router();

    router.post("/user", userPrint.create);
    router.get("/user", userPrint.findAll);
    router.delete("/user/:id", userPrint.delete);
    router.delete("/user", userPrint.deleteAll);
    router.put("/user/:id", userPrint.update);



    app.use('/api', router);

}
