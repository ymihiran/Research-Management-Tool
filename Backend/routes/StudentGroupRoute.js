import express from "express";

import { StudentGroup } from "../controllers/StudentGroupController.js";
const router = express.Router();


router.post("/group", StudentGroup);

export default router;