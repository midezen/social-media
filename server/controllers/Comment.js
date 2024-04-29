import Comment from "../models/Comment";

export const createComment = async (req, res) => {
  try {
    const newComment = new Comment(req.body);
    const savedComment = await newComment.save();
    res.status(200).json(savedComment);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const updateComment = async (req, res) => {
  const comment = await Comment.findById(req.params.id);
  if (comment.userId === req.user.id) {
    try {
      const updatedComment = await Comment.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedComment);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("permission denied");
  }
};

export const deleteComment = async (req, res) => {
  const comment = await Comment.findById(req.params.id);
  if (comment.userId === req.user.id) {
    try {
      await Comment.findByIdAndDelete(req.params.id);
      res.status(200).json("Comment deleted successfully");
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("permission denied");
  }
};

export const getComments = async (req, res) => {
  const comments = await Comment.find();
  res.status(200).json(comments);
};
