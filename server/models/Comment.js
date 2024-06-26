import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    postId: { type: String, required: true },
    commentDesc: { type: String, required: true },
    likes: { type: [String] },
  },
  { timestamps: true }
);

export default mongoose.model("Comment", CommentSchema);
