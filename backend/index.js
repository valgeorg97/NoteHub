import express from "express";
import { PORT } from "./config.js";
import cors from "cors";
import db from "./db.js";

const app = express();
app.use(cors());

app.get("/", async (req, res) => {

    const userEmail = 'test@test.com'
    
    try {
        const notes = await db.query('SELECT * FROM notes where user_email = $1', [userEmail]);
        res.json(notes.rows)
    } catch (err) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});