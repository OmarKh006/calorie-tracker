import sqlite3 from "sqlite3";

const db = new sqlite3.Database(
  "./records.db",
  sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
  (err) => {
    if (err) console.log(err.message);
  },
);

export default db;
