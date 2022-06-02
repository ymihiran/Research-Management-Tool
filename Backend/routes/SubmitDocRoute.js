import express from "express";

import {
  SubmitDoc,
  getDocs,
  getSubmitDocs,
} from "../controllers/SubmitDocController.js";
const router = express.Router();

router.post("/", SubmitDoc);
router.get("/", getDocs);
router.get("/student/:email", getSubmitDocs);

export default router;
