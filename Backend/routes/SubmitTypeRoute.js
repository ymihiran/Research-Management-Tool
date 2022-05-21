import express from "express";

import { SubmitType } from "../controllers/SubmitTypeController";
const router = express.Router();


router.post("/type", SubmitType);

export default router;



