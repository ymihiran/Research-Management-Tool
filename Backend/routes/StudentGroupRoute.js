import express from "express";

import {
  StudentGroup,
  getAllGroup,
} from "../controllers/StudentGroupController.js";
const router = express.Router();

router.post("/group", StudentGroup);

router.get("/group", getAllGroup);

export default router;
