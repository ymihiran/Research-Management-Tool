import File from "../models/File.js";

//Create a file route
export const createFile = async (req, res) => {
  try {
    const file = await File(req.body).save();
    res.status(201).send({ data: file, message: "Song created successfully" });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};

//Get all the files route
export const getAllFiles = async (req, res) => {
  try {
    const files = await File.find();
    res.status(200).send({ data: files });
    console.log({ data: files });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};
