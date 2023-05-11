module.exports = mongoose => {
    const Tutorial = mongoose.model(
        "tutorial",
        mongoose.Schema(
            {
                title: String,
                price: Number,
                category: String,
                imagenaame: [{
                    type: String
                }]
            },
            { timestamps: true }
        )
    );

    return Tutorial;
};