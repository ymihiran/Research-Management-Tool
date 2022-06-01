import express from "express";
import { getMsg, sendMsg, getAllMsg } from "../controllers/chatController.js";
const router = express.Router();

//chat forum routes
router.post("/", sendMsg);
router.get("/:group_id", getMsg);
router.get("/", getAllMsg);

export default router;
