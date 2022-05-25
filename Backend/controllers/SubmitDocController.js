import SubmitDocRoute from "../models/SubmitDoc.js";

//Submit documents
export const SubmitDoc = async (req, res) => {};

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
