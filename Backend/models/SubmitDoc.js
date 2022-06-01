import mongoose from "mongoose";
const Schema = mongoose.Schema;

const SubmitDocSchema = new Schema(
  {
    GroupID: {
      type: String,
    },

    Document: {
      type: String,
    },

    Status: {
      type: String,
      default: "Pending",
    },

    ResearchField: {
      type: String,
    },

    Comment: {
      type: String,
    },

    email: {
      type: String,
    },
  },
  { timestamps: true }
);

const SubmitDoc = mongoose.model("SubmitDoc", SubmitDocSchema);

export default SubmitDoc;
