import express from "express";
import db from "../db/connection.js";

const router = express.Router();

router.get("/", (req, res) => {
  db.all("SELECT * FROM calorie_record", [], (err, rows) => {
    if (err) return res.status(500).json({ message: err.message });
    res.json(rows);
  });
});

router.get("/:date", (req, res) => {
  db.all(
    "SELECT * FROM calorie_record WHERE date=?",
    [req.params.date],
    (err, rows) => {
      if (err) return res.status(500).json({ message: err.message });
      res.json(rows);
    },
  );
});

router.post("/", (req, res) => {
  const { date, meal, content, calories } = req.body;
  if (!date || !meal || !content || !calories)
    return res.status(400).json({ message: "There is a missing field" });
  db.run(
    `INSERT INTO calorie_record (date, meal, content, calories) VALUES (?, ?, ?, ?)`,
    [date, meal, content, calories],
    (err) => {
      if (err) return res.status(500).json({ message: err.message });
      res.status(201).json({ message: "record added successfully" });
    },
  );
});

router.put("/:id", (req, res) => {
  const { date, meal, content, calories } = req.body;
  if (!date || !meal || !content || !calories)
    return res.status(400).json({ message: "There is a missing field" });
  db.run(
    `UPDATE calorie_record SET date=?, meal=?, content=?, calories=? WHERE id=?`,
    [date, meal, content, calories, req.params.id],
    (err) => {
      if (err) return res.status(500).json({ message: err.message });
      res.status(200).json({ message: "record updated successfully" });
    },
  );
});

router.delete("/:id", (req, res) => {
  db.run(`DELETE FROM calorie_record WHERE id=?`, [req.params.id], (err) => {
    if (err) return res.status(500).json({ message: err.message });
    res.status(200).json({ message: "record deleted  successfully" });
  });
});

export default router;
