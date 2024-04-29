import express from "express";
import {
  createPost,
  deletePost,
  getPosts,
  updatePost,
} from "../controllers/Post.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

router.post("/createPost", createPost);
router.put("/:id", verifyToken, updatePost);
router.delete("/:id", verifyToken, deletePost);
router.get("/", getPosts);

export default router;
