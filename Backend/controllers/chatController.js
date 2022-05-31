import chatForum from "../models/chatForum.js";

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

//Get message details
export const getMsg = async (req, res) => {
  const group_id = req.params.group_id;
  console.log("id", group_id);
  chatForum
    .find({ group_id: group_id })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.catch.log(err);
    });
};
