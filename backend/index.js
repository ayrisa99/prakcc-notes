import express from "express";
import cors from "cors";
import UserRoutes from "./routes/UserRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(UserRoutes);

app.listen(3000, () => console.log('Server up and running...'))