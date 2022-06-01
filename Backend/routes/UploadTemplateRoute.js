import express from "express";

import {
  getAllTypes,
  UploadTemplate,
} from "../controllers/UploadTemplateController.js";
const router = express.Router();

router.post("/", UploadTemplate);

router.get("/", getAllTypes);

export default router;
