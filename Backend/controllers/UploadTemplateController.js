import UplaodTemplateRoute from "../models/UploadTemplate.js";

export const UploadTemplate = async (req, res) => {
  const Submission_Type_Name = req.body.Submission_Type_Name;
  const Description = req.body.Description;

  const newType = new SubmitTypeRoute({
    Admin_Name,
    Title,
    Template,
    Description,
  });

  newType
    .save()
    .then(() => {
      res.json("Added New Submission Type");
    })
    .catch((err) => {
      console.log(err);
    });
};
