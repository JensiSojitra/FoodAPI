module.exports = mongoose => {
    const Image = mongoose.model(
        "Image",
        mongoose.Schema(
            {
                title: String,
                price: Number,
                category: String,
                imagenaame: String
            },
            { timestamps: true }
        )
    );

    return Image;
};