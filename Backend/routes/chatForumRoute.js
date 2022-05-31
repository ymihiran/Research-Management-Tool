import express from "express";
import { getMsg, sendMsg } from "../controllers/chatController.js";
const router = express.Router();

router.post("/", sendMsg);
router.get("/", getMsg);

export default router;
