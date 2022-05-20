import express from "express";
import { EvaluavateDoc } from "../controllers/EvaluavateDoc";
const router = express.Router;

router.post("/EvaluavateDoc", EvaluavateDoc);

export default router;
