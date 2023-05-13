module.exports = mongoose => {
    const Image = mongoose.model(
        "Image",
        mongoose.Schema(
            {
                title: String,
                price: Number,
                category: String,
                imagenaame: [{ type: String }]
            },
            { timestamps: true }
        )
    );

    return Image;
};