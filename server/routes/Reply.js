import express from "express";
import { verifyToken } from "../verifyToken";
import {
  createReply,
  deleteReply,
  getReplies,
  updateReply,
} from "../controllers/Reply";

const router = express.Router();

router.post("/createReply", verifyToken, createReply);
router.put("/:id", verifyToken, updateReply);
router.delete("/:id", verifyToken, deleteReply);
router.get("/", getReplies);

export default router;
