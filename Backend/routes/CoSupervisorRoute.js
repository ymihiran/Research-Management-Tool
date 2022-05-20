import express from "express";
import { RequestCoSupervisor } from "../controllers/ReqCoSupervisorController";
const router = express.Router;

router.post("/coSupervisor", RequestCoSupervisor);

export default router;
