import UplaodTemplateRoute from "../models/UploadTemplate.js";

export const UploadTemplate = async (req, res) => {
  const Admin_Name = req.body.Admin_Name;
  const Title = req.body.Title;
  const Template = req.body.Template;
  const Description = req.body.Description;

  const newType = new UplaodTemplateRoute({
    Admin_Name,
    Title,
    Template,
    Description,
  });

  newType
    .save()
    .then(() => {
      res.json("Upload Template Successfully");
    })
    .catch((err) => {
      console.log(err);
    });
};
