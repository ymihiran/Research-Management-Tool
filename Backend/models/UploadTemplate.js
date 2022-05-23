import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UploadTemplateSchema = new Schema(
  {
    Admin_Name: {
      type: String,
      required: true,
    },

    Title: {
      type: String,
      required: true,
    },

    Template: {
      type: String,
      required: true,
    },

    Description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const UploadTemplate = mongoose.model("UploadTemplate", UploadTemplateSchema);
export default UploadTemplate;
