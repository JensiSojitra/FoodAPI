//data base ma je key ni jrur hoy a key lakhvani and table nu name j bnavvu hoy a lakhvanu
module.exports = mongoose => {
    const Menu = mongoose.model(
        "Menu",
        mongoose.Schema(
            {

                title: String,
                price: Number,
                category: String,
                foodtype: String,
            }
        )
    );

    return Menu;
};