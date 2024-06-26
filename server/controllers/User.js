import Comment from "../models/Comment.js";
import Post from "../models/Post.js";
import Reply from "../models/Reply.js";
import User from "../models/User.js";
import CryptoJS from "crypto-js";
import dotenv from "dotenv";

dotenv.config();

export const updateUser = async (req, res) => {
  try {
    if (req.params.id === req.user.id) {
      if (req.body.password) {
        const ciphertext = CryptoJS.AES.encrypt(
          req.body.password,
          process.env.encKey
        ).toString();
        req.body.password = ciphertext;
      }

      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      const { password, ...others } = updatedUser._doc;
      res.status(200).json(others);
    } else {
      return res.status(403).json("Permission denied");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

export const deleteUser = async (req, res) => {
  try {
    if (req.params.id === req.user.id) {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("Successfully deleted user");
    } else {
      return res.status(403).json("Permission denied");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const followUser = async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.user.id, {
      $addToSet: { following: req.params.id },
    });

    await User.findByIdAndUpdate(req.params.id, {
      $addToSet: { followers: req.user.id },
    });
    res.status(200).json("successfully followed User");
  } catch (err) {
    res.status(500).json(err);
  }
};

export const unfollowUser = async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.user.id, {
      $pull: { following: req.params.id },
    });

    await User.findByIdAndUpdate(req.params.id, {
      $pull: { followers: req.user.id },
    });
    res.status(200).json("successfully unfollowed User");
  } catch (err) {
    res.status(500).json(err);
  }
};

export const likePost = async (req, res) => {
  try {
    await Post.findByIdAndUpdate(req.params.PostId, {
      $addToSet: { likes: req.user.id },
    });
    res.status(200).json("successfully liked post");
  } catch (err) {
    res.status(500).json(err);
  }
};

export const unlikePost = async (req, res) => {
  try {
    await Post.findByIdAndUpdate(req.params.PostId, {
      $pull: { likes: req.user.id },
    });
    res.status(200).json("successfully unliked post");
  } catch (err) {
    res.status(500).json(err);
  }
};

export const likeComment = async (req, res) => {
  try {
    await Comment.findByIdAndUpdate(req.params.CommentId, {
      $addToSet: { likes: req.user.id },
    });
    res.status(200).json("successfully liked comment");
  } catch (err) {
    res.status(500).json(err);
  }
};

export const unlikeComment = async (req, res) => {
  try {
    await Comment.findByIdAndUpdate(req.params.CommentId, {
      $pull: { likes: req.user.id },
    });
    res.status(200).json("successfully unliked comment");
  } catch (err) {
    res.status(500).json(err);
  }
};

export const likeReply = async (req, res) => {
  try {
    await Reply.findByIdAndUpdate(req.params.ReplyId, {
      $addToSet: { likes: req.user.id },
    });
    res.status(200).json("successfully liked reply");
  } catch (err) {
    res.status(500).json(err);
  }
};

export const unlikeReply = async (req, res) => {
  try {
    await Reply.findByIdAndUpdate(req.params.ReplyId, {
      $pull: { likes: req.user.id },
    });
    res.status(200).json("successfully unliked reply");
  } catch (err) {
    res.status(500).json(err);
  }
};

export const savePost = async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.user.id, {
      $addToSet: { savedPosts: req.params.PostId },
    });
    res.status(200).json("Post saved successfully");
  } catch (err) {
    res.status(500).json(err);
  }
};

export const unsavePost = async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.user.id, {
      $pull: { savedPosts: req.params.PostId },
    });
    res.status(200).json("successfully unsaved post");
  } catch (err) {
    res.status(500).json(err);
  }
};

export const sendFriendRequest = async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.params.id, {
      $addToSet: { friendRequests: req.user.id },
      $addToSet: { followers: req.user.id },
    });
    await User.findByIdAndUpdate(req.user.id, {
      $addToSet: { sentRequests: req.params.id },
      $addToSet: { following: req.params.id },
    });
    res.status(200).json("request sent");
  } catch (err) {
    res.status(500).json(err);
  }
};

export const cancelSentRequest = async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.user.id, {
      $pull: { sentRequests: req.params.id },
    });

    await User.findByIdAndUpdate(req.params.id, {
      $pull: { friendRequests: req.user.id },
    });
    res.status(200).json("successfully cancelled request");
  } catch (err) {
    res.status(500).json(err);
  }
};

export const deleteFriendRequest = async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.user.id, {
      $pull: { friendRequests: req.params.id },
    });
    await User.findByIdAndUpdate(req.params.id, {
      $pull: { sentRequests: req.user.id },
    });
    res.status(200).json("request deleted");
  } catch (err) {
    res.status(500).json(err);
  }
};

export const unFriend = async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.user.id, {
      $pull: { friends: req.params.id, following: req.params.id },
    });
    await User.findByIdAndUpdate(req.params.id, {
      $pull: { friends: req.user.id, followers: req.user.id },
    });
    res.status(200).json("unfriend successful");
  } catch (err) {
    res.status(500).json(err);
  }
};

export const AcceptFriendRequest = async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.user.id, {
      $addToSet: { friends: req.params.id },
      $pull: { friendRequests: req.params.id },
      $addToSet: { followers: req.params.id, following: req.params.id },
    });

    await User.findByIdAndUpdate(req.params.id, {
      $addToSet: { friends: req.user.id },
      $pull: { sentRequests: req.user.id },
      $addToSet: { following: req.user.id, followers: req.user.id },
    });

    res.status(200).json("request accepted");
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getUserFriends = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const friends = user.friends;
    const list = await Promise.all(
      friends.map((friendId) => {
        return User.findById(friendId);
      })
    );
    res.status(200).json(list);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getUserFriendRequests = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const userFriendRequests = user.friendRequests;
    if (userFriendRequests.length === 0) return res.status(200).json([]);

    const list = await Promise.all(
      userFriendRequests.map((friendId) => {
        return User.findById(friendId);
      })
    );
    res.status(200).json(list);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getFollowers = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const followers = user.followers;
    const list = await Promise.all(
      followers.map((item) => {
        return User.findById(item);
      })
    );
    res.status(200).json(list);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getFollowings = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const following = user.following;
    const list = await Promise.all(
      following.map((item) => {
        return User.findById(item);
      })
    );
    res.status(200).json(list);
  } catch (err) {
    res.status(500).json(err);
  }
};
