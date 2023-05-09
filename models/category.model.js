//data base ma je key ni jrur hoy a key lakhvani and table nu name j bnavvu hoy a lakhvanu
module.exports = (mongoose) => {
  const category = mongoose.model(
    "category",
    mongoose.Schema({
      category: String,
    })
  );

  return category;
};
