import express from "express";
import { EvaluateDoc } from "../controllers/EvaluateDoc.js";
const router = express.Router();

router.post("/doc", EvaluateDoc);

export default router;
