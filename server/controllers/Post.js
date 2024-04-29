import Post from "../models/Post";
import User from "../models/User";
import { verifyToken } from "../verifyToken";

export const createPost = async (req, res) => {
  try {
    const newPost = new Post(req.body);
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const updatePost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (post.userId === req.user.id) {
    try {
      const updatedPost = await Post.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("Permission denied");
  }
};

export const deletePost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (post.userId === req.user.id) {
    try {
      await Post.findByIdAndDelete(req.params.id);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("Permission denied");
  }
};

export const getPosts = async (req, res) => {
  try {
    if (req.query.following) {
      verifyToken();
      const user = await User.findById(req.user.id);
      const following = user.following;
      const list = Promise.all(
        following.map((userID) => {
          return Post.find({ userId: userID });
        })
      );
      res.status(200).json(list);
    } else if (req.query.saved) {
      verifyToken();
      const user = await User.findById(req.user.id);
      const savedPosts = user.savedPosts;
      const list = Promise.all(
        savedPosts.map((savedPostId) => {
          return Post.findById(savedPostId);
        })
      );
      res.status(200).json(list);
    } else {
      const posts = await Post.find();
      res.status(200).json(posts);
    }
  } catch (err) {
    res.status(500).json(err);
  }
};
