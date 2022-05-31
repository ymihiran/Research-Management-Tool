import mongoose from "mongoose";
const Schema = mongoose.Schema;

const chatSchema = new Schema(
  {
    groupID: {
      type: String,
      required: true,
    },
    stdName: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const ChatSchema = mongoose.model("Chat", chatSchema);
export default ChatSchema;
