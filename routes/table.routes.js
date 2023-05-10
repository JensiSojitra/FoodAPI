module.exports = app => {
    const table = require("../controllers/table.controller");
    var router = require("express").Router();

    router.post("/table", table.create);
    router.get("/table", table.findAll);
    router.delete("/table/:id", table.delete);
    router.delete("/table", table.deleteAll);
    router.put("/table/:id", table.update);



    app.use('/api', router);

}
