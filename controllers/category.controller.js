const db = require("../models");
const category = db.category;

exports.create = (req, res) => {
  if (!req.body.category) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  const Category = new category({
    category: req.body.category,
  });

  Category.save(Category)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the menu.",
      });
    });
};

exports.findAll = (req, res) => {
  category
    .find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving citys.",
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  category
    .findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete data with id=${id}. Maybe data was not found!`,
        });
      } else {
        res.send({
          message: "data was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete data with id=" + id,
      });
    });
};

exports.deleteAll = (req, res) => {
  category
    .deleteMany({})
    .then((data) => {
      res.send({
        message: `${data.deletedCount} Menu data were deleted successfully!`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while removing all data.",
      });
    });
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }

  const id = req.params.id;

  category
    .findByIdAndUpdate(id, req.body, { useFindAndModify: true })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Menu with id=${id}. Maybe Menu was not found!`,
        });
      } else res.send({ message: "Menu was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Menu with id=" + id,
      });
    });
};
