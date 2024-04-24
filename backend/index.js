import express from "express";
import { PORT } from "./config.js";
import cors from "cors";

const app = express();

app.use(cors());

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});