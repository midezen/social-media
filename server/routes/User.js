import express from "express";
import { verifyToken } from "../verifyToken.js";
import {
  deleteUser,
  getUser,
  likePost,
  savePost,
  unlikePost,
  unsavePost,
  updateUser,
} from "../controllers/User.js";

const router = express.Router();

router.put("/:id", verifyToken, updateUser);
router.delete("/:id", verifyToken, deleteUser);
router.get("/:id", verifyToken, getUser);
router.put("/likePost/:id", verifyToken, likePost);
router.put("/unlikePost/:id", verifyToken, unlikePost);
router.put("/savePost/:id", verifyToken, savePost);
router.put("/unsavePost/:id", verifyToken, unsavePost);

export default router;
