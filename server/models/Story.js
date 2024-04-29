import mongoose from "mongoose";

const StorySchema = new mongoose.Schema(
  {
    userId: { type: String, require: true },
    storyPic: { type: String },
    storyText: { type: String },
    views: { type: Number, default: 0 },
    likes: { type: [String] },
  },
  { timestamps: true }
);

export default mongoose.model("Story", StorySchema);
