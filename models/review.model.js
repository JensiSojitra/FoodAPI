//data base ma je key ni jrur hoy a key lakhvani and table nu name j bnavvu hoy a lakhvanu
module.exports = (mongoose) => {
  const Review = mongoose.model(
    "Review",
    mongoose.Schema({
      review: String,
      review2: String,
      review3: String,
      user_id: {
        type: mongoose.Schema.Types.String,
        ref: "User",
      },
    })
  );

  return Review;
};
