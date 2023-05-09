module.exports = app => {
    const order = require("../controllers/order.controller");
    var router = require("express").Router();

    router.post("/order", order.create);
    router.get("/order", order.findAll);
    router.delete("/order/:id", order.delete);
    router.delete("/order", order.deleteAll);
    router.put("/order/:id", order.update);



    app.use('/api', router);

}
