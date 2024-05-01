import Comment from "../models/Comment.js";
import Post from "../models/Post.js";
import Reply from "../models/Reply.js";
import User from "../models/User.js";

export const updateUser = async (req, res) => {
  try {
    if (req.params.id === req.user.id) {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedUser);
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

export const likePost = async (req, res) => {
  try {
    await Post.findByIdAndUpdate(req.params.PostId, {
      $push: { likes: req.user.id },
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
      $push: { likes: req.user.id },
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
      $push: { likes: req.user.id },
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
      $push: { savedPosts: req.params.PostId },
    });
    res.status(200).json("Post saved successfully");
  } catch (err) {
    res.status(500).json(err);
  }
};

export const unsavePost = async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.user.PostId, {
      $pull: { savedPosts: req.params.id },
    });
    res.status(200).json("successfully unsaved post");
  } catch (err) {
    res.status(500).json(err);
  }
};

export const sendFriendRequest = async (req, res) => {
  try {
    await User.findById(req.params.id, {
      $push: { friendRequests: req.user.id },
    });
    res.status(200).json("request sent");
  } catch (err) {
    res.status(500).json(err);
  }
};

export const deleteFriendRequest = async (req, res) => {
  try {
    await User.findById(req.user.id, {
      $pull: { friendRequests: req.params.id },
    });
    res.status(200).json("request deleted");
  } catch (err) {
    res.status(500).json(err);
  }
};

export const unFriend = async (req, res) => {
  try {
    await User.findById(req.user.id, { $pull: { friends: req.params.id } });
    await User.findById(req.params.id, { $pull: { friends: req.user.id } });
    res.status(200).json("unfriend successful");
  } catch (err) {
    res.status(500).json(err);
  }
};

export const AcceptFriendRequest = async (req, res) => {
  try {
    await User.findById(req.user.id, { $push: { friends: req.params.id } });

    await User.findById(req.params.id, { $push: { friends: req.user.id } });
    res.status(200).json("request accepted");
  } catch (err) {
    res.status(500).json(err);
  }
};
