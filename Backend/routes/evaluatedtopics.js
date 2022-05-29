
import express from "express";
const router = express.Router();
import TopicReg from "../models/EvaluatedTopic.js";
import {
  addEvaluatedTopic,
  getAllEvaluatedTopic,
  getSingleEvaluatedTopic,
  updateSingleEvaluatedRecord,
  deleteEvaluatedTopic,
} from "../controllers/topicregController.js";

router.post("/", addEvaluatedTopic);

//get all topics
router.get("/", getAllEvaluatedTopic);

//get single topic
router.get("/:id", getSingleEvaluatedTopic);

//update single record
router.put("/:id", updateSingleEvaluatedRecord);

router.delete("/:id", deleteEvaluatedTopic);

export default router;

