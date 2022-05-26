import Marking from "../models/MarkingScheme.js";

export const getMarkingScheme = async (req, res) => {
  const field = req.params.field;
  console.log(field);
  Marking.findOne({ specialization: field })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
};
