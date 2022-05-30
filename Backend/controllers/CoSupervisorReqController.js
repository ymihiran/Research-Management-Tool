import CoSuperVisorReq from "../models/CoSupervisorReq.js";

//add request to the db
export const sendReq = async (req, res) => {
  try {
    const { groupID, researchField, topic, email } = req.body;

    const newRequest = new CoSuperVisorReq({
      groupID,
      researchField,
      topic,
      email,
    });

    await newRequest.save().then(() => {
      res.json(newRequest);
    });
  } catch (err) {
    res.status(500).json(err);
  }
};
