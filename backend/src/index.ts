import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import studiesRoutes from "./routes/studiesRoutes";
import participantsRoutes from "./routes/participantsRoutes";

dotenv.config();
const PORT = process.env.PORT || 8080;

const app = express();
app.use(cors());
app.use(express.json());

app.use("/studies", studiesRoutes);
app.use("/participants", participantsRoutes);

const startServer = async () => {
  try {
    app.listen(PORT, async () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

startServer();
