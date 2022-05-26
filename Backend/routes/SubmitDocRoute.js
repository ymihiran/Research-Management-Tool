import express from "express";

import { SubmitDoc } from "../controllers/SubmitDocController.js";
const router = express.Router();


router.post("/document", SubmitDoc);

export default router;



