import express from "express";
import { ReqCoSupervisor } from "../controllers/ReqCoSupervisorController.js";
const router = express.Router();

router.post("/coSupervisor", ReqCoSupervisor);

export default router;
