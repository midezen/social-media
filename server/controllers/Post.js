import Post from "../models/Post";

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
  const post = await findById(req.params.id);
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
