dotenv.config();
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./db.js";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

const app = express();

//server run in this port 8070
const PORT = process.env.PORT || 8070;

//Connect data base
connectDB();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

// Document/ presentation Evaluate Route
import evaluationRouter from "./routes/EvaluationRoute.js";
app.use("/evaluation", evaluationRouter);

// Supervisor/Co supervisor Route
import supervisorRouter from "./routes/SupervisorRoute.js";
app.use("/supervisor", supervisorRouter);

import topicRouter from "./routes/topicregs.js";
app.use("/topicReg", topicRouter);

import markingRouter from "./routes/markingschemes.js";
app.use("/marking", markingRouter);

//User Routes
import userRouter from "./routes/userRoute.js";
app.use("/user", userRouter);

import router from "./routes/SubmitTypeRoute.js";
app.use("/docType", router);

import createRouter from "./routes/StudentGroupRoute.js";
app.use("/create", createRouter);

import docRouter from "./routes/SubmitDocRoute.js";
app.use("/submitDoc", docRouter);

import uploadRouter from "./routes/UploadTemplateRoute.js";
app.use("/template", uploadRouter);

import fileRouter from "./routes/FileRoute.js";
app.use("/file", fileRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
