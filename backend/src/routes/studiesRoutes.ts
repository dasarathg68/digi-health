import express from "express";

const studiesRoutes = express.Router();

studiesRoutes.get("/", (req, res) => {
  res.send("Hello World");
});

export default studiesRoutes;
