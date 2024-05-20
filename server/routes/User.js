import express from "express";
import { verifyToken } from "../verifyToken.js";
import {
  AcceptFriendRequest,
  cancelSentRequest,
  deleteFriendRequest,
  deleteUser,
  followUser,
  getAllUsers,
  getFollowers,
  getFollowings,
  getUser,
  getUserFriendRequests,
  getUserFriends,
  likeComment,
  likePost,
  likeReply,
  savePost,
  sendFriendRequest,
  unFriend,
  unfollowUser,
  unlikeComment,
  unlikePost,
  unlikeReply,
  unsavePost,
  updateUser,
} from "../controllers/User.js";

const router = express.Router();

router.put("/:id", verifyToken, updateUser);
router.delete("/:id", verifyToken, deleteUser);
router.get("/:id", verifyToken, getUser);
router.get("/getuserfriends/:id", verifyToken, getUserFriends);
router.get("/getuserfriendrequests/:id", verifyToken, getUserFriendRequests);
router.get("/", verifyToken, getAllUsers);
router.get("/followers/:id", verifyToken, getFollowers);
router.get("/following/:id", verifyToken, getFollowings);
router.put("/followUser/:id", verifyToken, followUser);
router.put("/unfollowUser/:id", verifyToken, unfollowUser);
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
router.put("/cancelsentrequest/:id", verifyToken, cancelSentRequest);

export default router;
