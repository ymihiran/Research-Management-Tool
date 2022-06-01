import express from "express";
import {
  getAllReplyMsg,
  getReplyMsg,
  sendReplyMsg,
} from "../controllers/chatReplyController.js";
const router = express.Router();

//chat reply routes
router.get("/:messageID", getReplyMsg);
router.post("/", sendReplyMsg);
router.get("/group/replyMsgs", getAllReplyMsg);

export default router;
