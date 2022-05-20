import express from "express";
import { ReqCoSupervisor } from "../controllers/ReqCoSupervisorController";
const router = express.Router;

router.post("/coSupervisor", ReqCoSupervisor);

export default router;
