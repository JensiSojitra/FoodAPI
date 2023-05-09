module.exports = app => {
    const review = require("../controllers/review.controller");
    var router = require("express").Router();

    router.post("/review", review.create);
    router.get("/review", review.findAll);
    router.delete("/review/:id", review.delete);
    router.delete("/review", review.deleteAll);
    router.put("/review/:id", review.update);



    app.use('/api', router);

}
