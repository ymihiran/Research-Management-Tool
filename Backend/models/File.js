import mongoose from "mongoose";

const fileSchema = new mongoose.Schema({
  name: { type: String },

  song: { type: String },
});

const File = mongoose.model("file", fileSchema);

export default File;
