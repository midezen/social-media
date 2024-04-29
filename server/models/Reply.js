import mongoose from "mongoose";

const ReplySchema = new mongoose.Schema(
  {
    userId: { type: String, require: true },
    commentId: { type: String },
    replyDesc: { type: String },
    likes: { type: [String] },
  },
  { timestamps: true }
);

export default mongoose.model("Reply", ReplySchema);
