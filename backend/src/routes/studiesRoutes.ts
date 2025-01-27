import express from "express";
import { studiesController } from "../controllers/studiesController";

const studiesRoutes = express.Router();

studiesRoutes.get("/", studiesController.getStudies);
studiesRoutes.post("/", studiesController.createStudy);
studiesRoutes.get("/:id", studiesController.getStudyById);
studiesRoutes.put("/:id", studiesController.updateStudy);

export default studiesRoutes;
