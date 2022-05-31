import express from "express";
import { getMsg, sendMsg } from "../controllers/chatController.js";
const router = express.Router();

router.post("/", sendMsg);
router.get("/:group_id", getMsg);

export default router;
