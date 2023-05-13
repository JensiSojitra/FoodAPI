const util = require("util");
const multer = require("multer");
var fs = require('fs');
const maxSize = 2 * 1024 * 1024 * 1024;

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "/tmp");
    },
    filename: (req, file, cb) => {

        cb(null, file.originalname);
    },
});

let uploadFile = multer({
    storage: storage,
    limits: { fileSize: maxSize },
}).array("file");

let uploadFileMiddleware = util.promisify(uploadFile);

export function base64_encode(file) {
    // read binary data
    var bitmap = fs.readFileSync(file);
    // convert binary data to base64 encoded string
    return new Buffer(bitmap).toString('base64');
}



module.exports = uploadFileMiddleware;