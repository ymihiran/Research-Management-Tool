import express from "express";
import { findGroup } from "../controllers/chatGroupController.js";
const router = express.Router();

router.get("/", findGroup);
export default router;
