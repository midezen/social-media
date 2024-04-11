import express from "express";
import mongoose from "mongoose";

const app = express();

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

app.listen(8000, () => {
  console.log("app is connected and listen on port 8000");
});
