import express from "express";
import sqlite3 from "sqlite3";

const app = express();
app.use(express.json());

const db = new sqlite3.Database(
  "./records.db",
  sqlite3.OPEN_READWRITE,
  (err) => {
    if (err) console.log(err.message);
  },
);

app.get("/api/check", (req, res) => {
  res.json({ status: "ok", message: "Server is working!" });
});

db.run(`
    CREATE TABLE IF NOT EXISTS calorie_record (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        date TEXT NOT NULL DEFAULT (date('now')),
        meal TEXT NOT NULL DEFAULT 'Breakfast',
        content TEXT NOT NULL,
        calories INTEGER NOT NULL DEFAULT 0
    )
    `);

app.listen(3001, () => console.log("Server running on port 3001"));
