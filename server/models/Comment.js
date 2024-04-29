import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema(
  {
    userId: { type: String, require: true },
    postId: { type: String, require: true },
    commentDesc: { type: String, require: true },
    likes: { type: [String] },
  },
  { timestamps: true }
);

export default mongoose.model("Comment", CommentSchema);
