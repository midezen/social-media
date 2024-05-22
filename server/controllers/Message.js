import Message from "../models/Message";

export const createMessage = async (req, res) => {
  try {
    const newMessage = new Message({ ...req.body, userId: req.user.id });
    const savedMessage = await newMessage.save();
    res.status(200).json(savedMessage);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const editMessage = async (req, res) => {
  try {
  } catch (err) {
    res.status(500).json(err);
  }
};
