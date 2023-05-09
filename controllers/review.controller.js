const db = require("../models");
const Review = db.review;

exports.create = (req, res) => {
  if (!req.body.review) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  const review = new Review({
    review: req.body.review,
    review2: req.body.review2,
    review3: req.body.review3,
  });

  review
    .save(review)
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
  Review.find()
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

  Review.findByIdAndRemove(id)
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
  Review.deleteMany({})
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

  Review.findByIdAndUpdate(id, req.body, { useFindAndModify: true })
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
