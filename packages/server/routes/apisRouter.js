import express from "express";
import db from "../db/connection.js";

const router = express.Router();

router.get("/", (req, res) => {
  db.all("SELECT * FROM calorie_record", [], (err, rows) => {
    if (err) res.status(500).json({ message: err });
    else res.json(rows);
  });
});

router.post("/", (req, res) => {
  const { date, meal, content, calories } = req.body;
  db.run(
    `INSERT INTO calorie_record (date, meal, content, calories) VALUES (?, ?, ?, ?)`,
    [date, meal, content, calories],
    (err) => {
      if (err) res.status(500).json({ message: err });
      else res.status(200).json({ message: "record added successfully" });
    },
  );
});

export default router;
