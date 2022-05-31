import chatForum from "../models/chatForum.js";

export const sendMsg = async (req, res) => {
  try {
    const { groupID, stdName, subject, message } = req.body;

    const newMsg = new chatForum({
      groupID,
      stdName,
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
