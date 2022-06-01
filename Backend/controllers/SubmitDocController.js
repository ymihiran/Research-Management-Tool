import SubmitDocRoute from "../models/SubmitDoc.js";

export const SubmitDoc = async (req, res) => {
  console.log("req.body", req.body);
  const GroupID = req.body.GroupID;
  const ResearchField = req.body.ResearchField;
  const Document = req.body.song;
  const Comment = req.body.Comment;

  const newType = new SubmitDocRoute({
    GroupID,
    ResearchField,
    Document,
    Comment,
  });

  newType
    .save()
    .then(() => {
      res.json("Document Submit Successfully");
    })
    .catch((err) => {
      console.log(err);
    });
};
