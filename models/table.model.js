//data base ma je key ni jrur hoy a key lakhvani and table nu name j bnavvu hoy a lakhvanu
module.exports = (mongoose) => {
    const table = mongoose.model(
        "table",
        mongoose.Schema({
            table: Number,
        })
    );

    return table;
};
