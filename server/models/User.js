import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    firstName: { type: String, require: true },
    lastName: { type: String, require: true },
    userName: { type: String, require: true, unique: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    profilePic: { type: String },
    followers: { type: [String] },
    following: { type: [String] },
    savedPosts: { type: [String] },
  },
  { timestamps: true }
);
