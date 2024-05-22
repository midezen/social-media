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
    const message = await Message.findById(req.params.id);
    if (message.userId === req.user.id) {
      const editedMessage = await Message.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(editedMessage);
    } else {
      return res.status(403).json("You can only edit your own messages");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getMessages = async (req, res) => {
  try {
    const messages = await Message.find({ conversationId: req.params.id }).sort(
      { createdAt: "asc" }
    );
    res.status(200).json(messages);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const deleteMessage = async (req, res) => {
  try {
    const message = await Message.findById(req.params.id);
    if (message.userId === req.user.id) {
      await Message.findByIdAndDelete(req.params.id);
      res.status(200).json("Message deleted successfully");
    } else {
      return res.status(403).json("You can only delete your own messages");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};
