import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    messageDescription: { type: String, required: true },
    ConversationId: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Message", MessageSchema);
