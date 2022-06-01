import chatForum from "../models/chatForum.js";
import ChatReply from "../models/chatReply.js";

//insert message details to the db
export const sendMsg = async (req, res) => {
  try {
    const { group_id, groupID, stdName, stdEmail, subject, message } = req.body;

    const newMsg = new chatForum({
      group_id,
      groupID,
      stdName,
      stdEmail,
      subject,
      message,
    });

    await newMsg.save().then(() => {
      res.json(newMsg);
    });
  } catch (err) {
    console.log("err");
    res.status(500).json(err);
  }
};

//Get a message details
export const getMsg = async (req, res) => {
  const group_id = req.params.group_id;
  console.log("id:", group_id);
  chatForum
    .find({ group_id: group_id })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.catch.log(err);
    });
};

//Get all message details
export const getAllMsg = async (req, res) => {
  chatForum
    .find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.catch.log(err);
    });
};

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
