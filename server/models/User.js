import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    userName: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    province: { type: String },
    country: { type: String },
    about: { type: String },
    mobileNo: { type: String },
    posts: [],
    profilePic: { type: String },
    followers: { type: [String] },
    following: { type: [String] },
    savedPosts: { type: [String] },
    friends: { type: [String] },
    friendRequests: { type: [String] },
    sentRequests: { type: [String] },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
