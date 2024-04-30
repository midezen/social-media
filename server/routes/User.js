import express from "express";
import { verifyToken } from "../verifyToken.js";
import {
  AcceptFriendRequest,
  deleteFriendRequest,
  deleteUser,
  getUser,
  likeComment,
  likePost,
  likeReply,
  savePost,
  sendFriendRequest,
  unFriend,
  unlikeComment,
  unlikePost,
  unlikeReply,
  unsavePost,
  updateUser,
} from "../controllers/User.js";

const router = express.Router();

router.put("/:id", verifyToken, updateUser);
router.delete("/:id", verifyToken, deleteUser);
router.get("/:id", getUser);
router.put("/likePost/:id", verifyToken, likePost);
router.put("/unlikePost/:id", verifyToken, unlikePost);
router.put("/likeComment/:id", verifyToken, likeComment);
router.put("/unlikeComment/:id", verifyToken, unlikeComment);
router.put("/likeReply/:id", verifyToken, likeReply);
router.put("/unlikeReply/:id", verifyToken, unlikeReply);
router.put("/savePost/:id", verifyToken, savePost);
router.put("/addfriend/:id", verifyToken, sendFriendRequest);
router.put("/deleterequest/:id", verifyToken, deleteFriendRequest);
router.put("/acceptrequest/:id", verifyToken, AcceptFriendRequest);
router.put("/unfriend/:id", verifyToken, unFriend);

export default router;
