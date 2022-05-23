import express from "express";

import { UploadTemplate } from "../controllers/UploadTemplateController.js";
const router = express.Router();

router.post("/docTemplate", UploadTemplate);

export default router;
