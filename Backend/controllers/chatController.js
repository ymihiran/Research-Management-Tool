import chatForum from "../models/chatForum.js";

//insert message details to the db
export const sendMsg = async (req, res) => {
  try {
    const { groupID, stdName, stdEmail, subject, message } = req.body;

    const newMsg = new chatForum({
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

//Get message details
export const getMsg = async (req, res) => {
  chatForum
    .find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.catch.log(err);
    });
};
