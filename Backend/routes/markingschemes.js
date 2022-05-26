
import express from 'express';
import { addMarking, getAllMarkings, getSingleMarking, updateMarking , deleteMarking } from '../controllers/markingController.js';
const router = express.Router()
import Marking from "../models/MarkingScheme.js";



router.post("/",addMarking)

//get all topics
router.get("/",getAllMarkings)



  //get single topic
  router.get("/:id",getSingleMarking)

  //update single record

  router.put("/:id",updateMarking)    


router.delete("/:id",deleteMarking)



export default router;
