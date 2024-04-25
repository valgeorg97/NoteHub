import express from "express";
import { PORT } from "./config.js";
import cors from "cors";
import db from "./db.js";
import bcrypt from "bcrypt"

const app = express();
app.use(cors());
app.use(express.json());

//get all notes
app.get("/notes", async (req, res) => {
    const userEmail = 'test@test.com';
    try {
        const notes = await db.query('SELECT * FROM notes WHERE user_email = $1', [userEmail]);
        res.status(201).json(notes.rows);
    } catch (err) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// get a single note
app.get("/notes/:id", async (req, res) => {
    const { id } = req.params;
    const userEmail = 'test@test.com';
    try {
        const note = await db.query('SELECT * FROM notes WHERE id = $1 AND user_email = $2', [id, userEmail]);
        if (note.rows.length === 0) {
            return res.status(404).json({ error: "Note not found" });
        }
        res.status(201).json(note.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// create note
app.post("/notes", async (req, res) => {
    const { title, content, userEmail } = req.body;
    try {
        const newNote = await db.query(`INSERT INTO notes(title, content, user_email)
                        VALUES($1, $2, $3)`, [title, content, userEmail]);
        res.status(201).json(newNote);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// edit note
app.put("/notes/:id", async (req, res) => {
    const { id } = req.params;
    const { title, content, userEmail } = req.body; 
    try {
        const updateNote = await db.query(
            "UPDATE notes SET title = $1, content = $2, user_email = $3 WHERE id = $4;", 
            [title, content, userEmail, id]
        );
        res.status(201).json(updateNote.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// delete note
app.delete("/notes/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const deleteNote = await db.query("DELETE FROM notes WHERE id = $1", [id]); 
        res.status(201).json(deleteNote.rows[0]); 
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// signup
app.post("/signup", async (req, res) => {
    const { email, password } = req.body;
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    try {
        await db.query(`INSERT INTO users(email, hashed_password) VALUES($1, $2)`, [email, hashedPassword]);
        res.status(201).json({ email }); 
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// login
app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await db.query("SELECT * FROM users WHERE email = $1", [email]);
        if (!user.rows.length) {
            return res.status(404).json({ error: "User not found" });
        }
        const match = await bcrypt.compare(password, user.rows[0].hashed_password);
        if (match) {
            res.status(201).json({ message: "Login successful", email: user.rows[0].email });
        } else {
            res.status(401).json({ error: "Incorrect password" });
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});