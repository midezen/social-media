import express from "express";
import { verifyToken } from "../verifyToken.js";
import {
  createReply,
  deleteReply,
  getReplies,
  updateReply,
} from "../controllers/Reply.js";

const router = express.Router();

router.post("/createReply", verifyToken, createReply);
router.put("/:id", verifyToken, updateReply);
router.delete("/:id", verifyToken, deleteReply);
router.get("/commentId", getReplies);

export default router;
