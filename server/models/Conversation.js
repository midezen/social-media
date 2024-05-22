import mongoose from "mongoose";

const ConversationSchema = new mongoose.Schema(
  {
    userId: { type: String, required: "true" },
    otherUserId: { type: String, required: "true" },
  },
  { timestamps: true }
);

export default mongoose.model("Conversation", ConversationSchema);
