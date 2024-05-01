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
router.put("/likePost/:PostId", verifyToken, likePost);
router.put("/unlikePost/:PostId", verifyToken, unlikePost);
router.put("/likeComment/:CommentId", verifyToken, likeComment);
router.put("/unlikeComment/:CommentId", verifyToken, unlikeComment);
router.put("/likeReply/:ReplyId", verifyToken, likeReply);
router.put("/unlikeReply/:ReplyId", verifyToken, unlikeReply);
router.put("/savePost/:PostId", verifyToken, savePost);
router.put("/unsavePost/:PostId", verifyToken, unsavePost);
router.put("/addfriend/:id", verifyToken, sendFriendRequest);
router.put("/deleterequest/:id", verifyToken, deleteFriendRequest);
router.put("/acceptrequest/:id", verifyToken, AcceptFriendRequest);
router.put("/unfriend/:id", verifyToken, unFriend);

export default router;
