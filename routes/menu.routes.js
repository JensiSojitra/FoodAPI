module.exports = app => {


    const menu = require("../controllers/menu.controller");

    var router = require("express").Router();


    router.post("/menu", menu.create);
    router.get("/menu", menu.findAll);
    router.delete("/menu/:id", menu.delete);
    router.delete("/menu", menu.deleteAll);
    router.put("/menu/:id", menu.update);



    app.use('/api', router);

}
