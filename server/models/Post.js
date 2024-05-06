import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    fileUrl: { type: String },
    postDesc: { type: String },
    hashTags: { type: [String] },
    likes: { type: [String] },
  },
  { timestamps: true }
);

export default mongoose.model("Post", PostSchema);
