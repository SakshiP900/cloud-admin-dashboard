const express = require("express");
const cors = require("cors");
const db = require("./db"); // your existing db.js with MySQL connection

const app = express();
app.use(cors());
app.use(express.json());

// Get all users
app.get("/users", (req, res) => {
  db.query("SELECT * FROM users", (err, result) => {
    if (err) return res.status(500).send(err);
    res.json(result);
  });
});

// Add new user
app.post("/users", (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).send("Name is required");

  db.query("INSERT INTO users (name) VALUES (?)", [name], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ id: result.insertId, name });
  });
});

// Delete user
app.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM users WHERE id = ?", [id], (err) => {
    if (err) return res.status(500).send(err);
    res.sendStatus(200);
  });
});

// Start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});

