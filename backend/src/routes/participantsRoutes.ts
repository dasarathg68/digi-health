import express from "express";

const participantsRoutes = express.Router();

participantsRoutes.get("/", (req, res) => {
  res.send("Hello World");
});

export default participantsRoutes;
