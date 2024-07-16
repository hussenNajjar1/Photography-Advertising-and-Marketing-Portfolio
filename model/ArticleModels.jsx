import mongoose from "mongoose";

const { Schema } = mongoose;

const ArticleSchema = new Schema(
    {
        title: { type: String, required: true },
        image: { type: String, required: true },
        date: { type: Date, default: Date.now }
    },
    {
        timestamps: true
    }
);

const ArticleModel = mongoose.models.Post || mongoose.model("Post", ArticleSchema);

export default ArticleModel;
