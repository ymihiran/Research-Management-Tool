import ChatReply from "../models/chatReply.js";

//insert reply message details to the db
export const sendReplyMsg = async (req, res) => {
  console.log("req.body", req.body);
  const { messageID, message } = req.body;
  const newReplyMsg = new ChatReply({
    messageID,
    message,
  });
  await newReplyMsg
    .save()
    .then(() => {
      res.json(newReplyMsg);
    })
    .catch((err) => {
      console.log("err");
      res.status(500).json(err);
    });
};

//Get reply message details
export const getReplyMsg = async (req, res) => {
  console.log("25");
  const messageID = req.params.messageID;
  ChatReply.find({ messageID: messageID })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.catch.log(err);
    });
};

export const getAllReplyMsg = async (req, res) => {
  ChatReply.find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.catch.log(err);
    });
};
