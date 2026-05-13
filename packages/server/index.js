import express from "express";
import sqlite3 from "sqlite3";
import init from "./db/createTable.js";
import apis from "./routes/apisRouter.js";

const app = express();
app.use(express.json());

init();

app.use("/api/calories", apis);

app.get("/api/check", (req, res) => {
  res.json({ status: "ok", message: "Server is working!" });
});

app.listen(3001, () => console.log("Server running on port 3001"));
