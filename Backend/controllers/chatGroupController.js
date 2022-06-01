import chatForum from "../models/chatForum.js";

//get distinct groupID
export const findGroup = async (req, res) => {
  const groupID = req.params.groupID;
  console.log("test");

  chatForum
    .distinct(groupID)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
};
