import SubmitDocRoute from "../models/SubmitDoc.js";

//Get submitted documents details
export const getDocs = async (req, res) => {
  SubmitDocRoute.find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.catch.log(err);
    });
};

export const SubmitDoc = async (req, res) => {
  console.log("req.body", req.body);
  const GroupID = req.body.GroupID;
  const ResearchField = req.body.ResearchField;
  const Document = req.body.song;
  const email = req.body.email;
  const Comment = req.body.Comment;
  const ResearchTopic = req.body.ResearchTopic;

  const newType = new SubmitDocRoute({
    GroupID,
    ResearchField,
    Document,
    Comment,
    email,
    ResearchTopic,
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
