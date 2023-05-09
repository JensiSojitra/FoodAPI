const db = require("../models");
const Menu = db.menu;

exports.create = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    const menu = new Menu({
        name: req.body.name,
        price: req.body.price,
        category: req.body.category,
        foodtype: req.body.foodtype,
    });

    menu
        .save(menu)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the menu."
            });
        });
};

exports.findAll = (req, res) => {
    Menu.find()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving citys."
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Menu.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete data with id=${id}. Maybe data was not found!`
                });
            } else {
                res.send({
                    message: "data was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete data with id=" + id
            });
        });
};

exports.deleteAll = (req, res) => {
    Menu.deleteMany({})
        .then(data => {
            res.send({
                message: `${data.deletedCount} Menu data were deleted successfully!`
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all data."
            });
        });
};

exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const id = req.params.id;

    Menu.findByIdAndUpdate(id, req.body, { useFindAndModify: true })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Menu with id=${id}. Maybe Menu was not found!`
                });
            } else res.send({ message: "Menu was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Menu with id=" + id
            });
        });
};

