import express from "express";
import { verifyToken } from "../verifyToken.js";
import {
  AcceptFriendRequest,
  deleteFriendRequest,
  deleteUser,
  getUser,
  likePost,
  savePost,
  sendFriendRequest,
  unFriend,
  unlikePost,
  unsavePost,
  updateUser,
} from "../controllers/User.js";

const router = express.Router();

router.put("/:id", verifyToken, updateUser);
router.delete("/:id", verifyToken, deleteUser);
router.get("/:id", getUser);
router.put("/likePost/:id", verifyToken, likePost);
router.put("/unlikePost/:id", verifyToken, unlikePost);
router.put("/savePost/:id", verifyToken, savePost);
router.put("/addfriend/:id", verifyToken, sendFriendRequest);
router.put("/deleterequest/:id", verifyToken, deleteFriendRequest);
router.put("/acceptrequest/:id", verifyToken, AcceptFriendRequest);
router.put("/unfriend/:id", verifyToken, unFriend);

export default router;
