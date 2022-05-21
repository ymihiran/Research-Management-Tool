import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./db.js";

const app = express();

dotenv.config();

//server run in this port 8070
const PORT = process.env.PORT || 8070;

//Connect data base
connectDB();

app.use(express.json());
app.use(cors());

// Document/ presentation Evaluate Route
import evaluationRouter from "./routes/EvaluationRoute.js";
app.use("/evaluation", evaluationRouter);

// Supervisor/Co supervisor Route
import supervisorRouter from "./routes/SupervisorRoute.js";
app.use("/supervisor", supervisorRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

import topicRouter from "./routes/topicregs.js";
app.use("/topicReg", topicRouter);
