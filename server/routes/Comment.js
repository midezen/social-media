import express from "express";
import { verifyToken } from "../verifyToken.js";
import {
  createComment,
  deleteComment,
  getComments,
  updateComment,
} from "../controllers/Comment.js";

const router = express.Router();

router.post("/createComment", verifyToken, createComment);
router.put("/:id", verifyToken, updateComment);
router.delete("/:id", verifyToken, deleteComment);
router.get("/:postId", getComments);

export default router;
