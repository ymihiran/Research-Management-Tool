import express from "express";
import {
  getMsg,
  sendMsg,
  getAllMsg,
  getReplyMsg,
  sendReplyMsg,
} from "../controllers/chatController.js";
const router = express.Router();

//chat forum routes
router.post("/", sendMsg);
router.get("/:group_id", getMsg);
router.get("/", getAllMsg);

//chat reply routes
router.get("/replyMsg/:messageID", getReplyMsg);
router.post("/replyMsg/", sendReplyMsg);

export default router;
