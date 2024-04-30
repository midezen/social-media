import Reply from "../models/Reply.js";

export const createReply = async (req, res) => {
  try {
    const newReply = new Reply();
    const savedReply = await newReply.save();
    res.status(200).json(savedReply);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const updateReply = async (req, res) => {
  try {
    const reply = await Reply.findById(req.params.id);
    if (reply.userId === req.user.id) {
      const updatedReply = await Reply.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedReply);
    } else {
      return res.status(403).json("Permission denied");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

export const deleteReply = async (req, res) => {
  try {
    const reply = await Reply.findById(req.params.id);
    if (reply.userId === req.user.id) {
      await Reply.findByIdAndDelete(req.params.id);
      res.status(200).json("successfully deleted reply");
    } else {
      return res.status(403).json("Permission denied");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getReplies = async (req, res) => {
  try {
    const replies = await Reply.find({ commentId: req.params.commentId });
    res.status(200).json(replies);
  } catch (err) {
    res.status(500).json(err);
  }
};
