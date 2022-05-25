import express from "express";

import { UploadTemplate } from "../controllers/UploadTemplateController.js";
const router = express.Router();


router.post("/template", UploadTemplate);

export default router;



