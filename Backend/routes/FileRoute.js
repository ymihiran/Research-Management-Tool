import express from "express";
const router = express.Router();
import { createFile, getAllFiles } from "../controllers/FileController.js";

// Create file
router.post("/", createFile);

// Get all files
router.get("/", getAllFiles);

export default router;
