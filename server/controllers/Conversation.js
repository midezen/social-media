import Conversation from "../models/Conversation";

export const CreateConversation = async (req, res) => {
  try {
    const newConversation = new Conversation({
      ...req.body,
      userId: req.user.id,
    });
    const savedConversation = await newConversation.save();
    res.status(200).json(savedConversation);
  } catch (err) {
    res.status(500).json(err);
  }
};
