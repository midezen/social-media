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
  const reply = await Reply.findById(req.params.id);
  if (reply.userId === req.user.id) {
    try {
      const updatedReply = await Reply.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedReply);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("permission denied");
  }
};

export const deleteReply = async (req, res) => {
  const reply = await Reply.findById(req.params.id);
  if (reply.userId === req.user.id) {
    try {
      await Reply.findByIdAndDelete();
      res.status(200).json("Reply deleted successfully");
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("permission denied");
  }
};

export const getReplies = async (req, res) => {
  try {
    const replies = await Reply.find();
    res.status(200).json(replies);
  } catch (err) {
    res.status(500).json(err);
  }
};
