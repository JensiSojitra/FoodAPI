const uploadFile = require("../middleware/upload");
const fs = require("fs");
const db = require("../models");
const Tutorial = db.tutorials;
const baseUrl = "http://localhost:8080/files/";

const upload = async (req, res) => {

    let d = await uploadFile(req, res)
    let gi = req.files.map((y) => {
        return y.filename
    });

    console.log(gi)
    console.log(req.body.title);
    console.log(req.body.price);
    console.log(req.body.category);
    const tutorial = new Tutorial({
        title: req.body.title,
        price: req.body.price,
        category: req.body.category,
        imagenaame: gi
    });

    // // Save Tutorial in the database
    tutorial
        .save(tutorial)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tutorial."
            });
        });
};
const getListFiles = (req, res) => {
    const directoryPath = __basedir + "/resources/uploads";

    Tutorial.find()
        .then(data => {
            let d = data?.map((t) => {
                let imag = t?.imagenaame?.map((g) => {
                    return baseUrl + g;
                })
                t.imagenaame = imag;
                return t;
            })
            res.send(d);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        });
};

const download = (req, res) => {
    const fileName = req.params.name;
    const directoryPath = __basedir + "/resources/uploads";

    res.download(directoryPath + fileName, fileName, (err) => {
        if (err) {
            res.status(500).send({
                message: "Could not download the file. " + err,
            });
        }
    });
};

const remove = (req, res) => {
    const fileName = req.params.name;
    const directoryPath = __basedir + "/resources/uploads";

    fs.unlink(directoryPath + fileName, (err) => {
        if (err) {
            res.status(500).send({
                message: "Could not delete the file. " + err,
            });
        }

        res.status(200).send({
            message: "File is deleted.",
        });
    });
};

const removeSync = (req, res) => {
    const fileName = req.params.name;
    const directoryPath = __basedir + "/resources/uploads";

    try {
        fs.unlinkSync(directoryPath + fileName);

        res.status(200).send({
            message: "File is deleted.",
        });
    } catch (err) {
        res.status(500).send({
            message: "Could not delete the file. " + err,
        });
    }
};

// const delete = (req, res) => {
//   const id = req.params.id;

//   Tutorial.findByIdAndRemove(id)
//     .then(data => {
//       if (!data) {
//         res.status(404).send({
//           message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
//         });
//       } else {
//         res.send({
//           message: "Tutorial was deleted successfully!"
//         });
//       }
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: "Could not delete Tutorial with id=" + id
//       });
//     });
// };

const deleteAll = (req, res) => {
    Tutorial.deleteMany({})
        .then(data => {
            res.send({
                message: `${data.deletedCount} Tutorials were deleted successfully!`
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all tutorials."
            });
        });
};

const update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const id = req.params.id;

    Tutorial.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found!`
                });
            } else res.send({ message: "Tutorial was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Tutorial with id=" + id
            });
        });
};
const findAll = (req, res) => {
    Tutorial.find()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        });
};
module.exports = {
    upload,
    getListFiles,
    download,
    remove,
    removeSync,
    deleteAll,
    // delete,
    findAll,
    update
};