import mongoose from "mongoose";

const ReplySchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    commentId: { type: String, required: true },
    replyDesc: { type: String, required: true },
    likes: { type: [String] },
  },
  { timestamps: true }
);

export default mongoose.model("Reply", ReplySchema);
