
import express from "express";
const router = express.Router();
import TopicReg from "../models/TopicReg.js";
import {
  addTopic,
  getAllTopic,
  getSingleTopic,
  updateSingleRecord,
  deleteTopic,
  getSingleTopicData
} from "../controllers/topicregController.js";

router.post("/", addTopic);

//get all topics
router.get("/", getAllTopic);

//get single topic
router.get("/:id", getSingleTopic);

//get single topic using group ID
router.get("/group/:id", getSingleTopicData);

//update single record
router.put("/:id", updateSingleRecord);

router.delete("/:id", deleteTopic);

export default router;

