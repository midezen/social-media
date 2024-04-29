import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import AuthRoute from "./routes/Auth.js";
import UserRoute from "./routes/User.js";
import PostRoute from "./routes/Post.js";
import CommentRoute from "./routes/Comment.js";

const app = express();

dotenv.config();

app.use(express.json());

mongoose
  .connect(process.env.mongoUri)
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log("DB not connected, this is the error: " + err);
  });

app.get("/health", (req, res) => {
  res.send("server is running");
});

app.use("/api/auth", AuthRoute);
app.use("/api/users", UserRoute);
app.use("/api/posts", PostRoute);
app.use("/api/comments", CommentRoute);

app.listen(8000, () => {
  console.log("app is connected and listen on port 8000");
});
