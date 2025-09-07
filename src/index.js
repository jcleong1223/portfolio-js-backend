import express from "express";
import "dotenv/config";
import landingRoutes from "./routes/landing.route.js"
import { connectDB } from "./lib/db.js";
import cors from "cors";
import job from "./lib/cron.js";
import uploadMediaRouter from "./lib/uploadMedia.js"


const app = express();
const PORT = process.env.PORT || 3000;

job.start();

app.use(express.json());
app.use(cors());

app.use("/api/landing", landingRoutes);
app.use("/api/upload", uploadMediaRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
});



