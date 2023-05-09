//data base ma je key ni jrur hoy a key lakhvani and table nu name j bnavvu hoy a lakhvanu
module.exports = (mongoose) => {
  const Order = mongoose.model(
    "Order",
    mongoose.Schema({
      user_id: {
        type: mongoose.Schema.Types.String,
        ref: "User",
      },
      menu_id: {
        type: mongoose.Schema.Types.String,
        ref: "Menu",
      },
      order_time: String,
      order_date: Date,
      table_no: Number,
      total_amt: Number,
      discount: Number,
      qty: Array,
      descreption: String,
    })
  );

  return Order;
};
