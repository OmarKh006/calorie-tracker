import db from "./connection.js";

const init = () =>
  db.run(`
    CREATE TABLE IF NOT EXISTS calorie_record (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        date TEXT NOT NULL DEFAULT (date('now')),
        meal TEXT NOT NULL DEFAULT 'Breakfast',
        content TEXT NOT NULL,
        calories INTEGER NOT NULL DEFAULT 0
    )
    `);

export default init;
