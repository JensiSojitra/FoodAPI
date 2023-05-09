//koi 1 variable ma aakhu co ntrollor store kravi devanu ane ane get ma ane post ma variablename.controllorexport(var)

module.exports = app => {

    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
    const admin = require("../controllers/adminregister.controller");//full contoller shital ma import kravyu

    const authJwt = require("../middleware/authJwt");
    var router = require("express").Router();//router ma express.js import kravyu

    router.post("/adminsignup", admin.adminsignup);//admin.create ma je create(method) che a controller ma thi lai aavya
    router.post("/adminsignin", admin.adminsignin);//admin.create ma je create(method) che a controller ma thi lai aavya
    // router.get("/signin", [authJwt.verifyToken, authJwt.isAdmin], auth.findAll);//auth.create ma je create(method) che a controller ma thi lai aavya




    app.use('/api', router);//je api bane a last ma aapnu je server hoy tya aa last ma lahvanu

}