import express from "express";
import { participantController } from "../controllers/participantController";

const participantsRoutes = express.Router();

participantsRoutes.post("/register", participantController.registerParticipant);
participantsRoutes.get("/:address", participantController.getParticipantData);
participantsRoutes.put(
  "/:address/preferences",
  participantController.updatePreferences
);
participantsRoutes.post("/join-study", participantController.joinStudy);

export default participantsRoutes;
