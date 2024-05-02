import Post from "../models/Post.js";
import User from "../models/User.js";
import { verifyToken } from "../verifyToken.js";

export const createPost = async (req, res) => {
  try {
    const newPost = new Post({ ...req.body, userId: req.user.id });
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const updatePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.user.id) {
      const updatedPost = await Post.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedPost);
    } else {
      return res.status(403).json("Permission denied");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

export const deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.user.id) {
      await Post.findByIdAndDelete(req.params.id);
      res.status(200).json("successfully deleted post");
    } else {
      return res.status(403).json("Permission denied");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getPosts = async (req, res) => {
  try {
    if (req.query.following) {
      verifyToken();
      const user = await User.findById(req.user.id);
      const following = user.following;
      const list = await Promise.all(
        following.map((userID) => {
          return Post.find({ userId: userID });
        })
      );
      res.status(200).json(list.flat());
    } else if (req.query.saved) {
      verifyToken();
      const user = await User.findById(req.user.id);
      const savedPosts = user.savedPosts;
      const list = await Promise.all(
        savedPosts.map((savedPostId) => {
          return Post.findById(savedPostId);
        })
      );
      res.status(200).json(list.flat());
    } else {
      const posts = await Post.find();
      res.status(200).json(posts);
    }
  } catch (err) {
    res.status(500).json(err);
  }
};
