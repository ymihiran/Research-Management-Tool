import express from "express";
import { sendReq } from "../controllers/CoSupervisorReqController.js";
const router = express.Router();

router.post("/", sendReq);

export default router;
