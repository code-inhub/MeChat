import Conversation from "../model/conversation.js";

export const newConversation = async (request, response) => {
  try {
    const senderId = request.body.senderId;
    const receiverId = request.body.receiverId;

    const exist = await Conversation.findOne({
      members: { $all: [senderId, receiverId] },
    });

    if (exist) {
      return response.status(200).json({ msg: "Conversation already exists" });
    }

    const newConversation = new Conversation({
      members: [senderId, receiverId],
    });
    await newConversation.save();
    return response.status(200).json("conversation saved successfully");
  } catch (err) {
    return response.status(500).json(err.message);
  }
};

export const getConversation = async (request, response) => {
  try {
    const senderId = request.body.senderId;
    const receiverId = request.body.receiverId;
    let conversation = await Conversation.findOne({
      members: { $all: [receiverId, senderId] },
    });
    return response.status(200).json(conversation);
  } catch (err) {
    return response.status(500).json(err.message);
  }
};
