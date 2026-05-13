import express from "express";

const app = express();
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Server is working!" });
});

app.listen(3001, () => console.log("Server running on port 3001"));
