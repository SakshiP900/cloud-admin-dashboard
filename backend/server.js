const express = require("express");
const cors = require("cors");
const db = require("./db"); // MySQL connection file

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// =======================
// Routes
// =======================

// Get all users
app.get("/users", (req, res) => {
  db.query("SELECT * FROM users", (err, result) => {
    if (err) {
      console.error("Error fetching users:", err);
      return res.status(500).json({ error: "Database error" });
    }
    res.json(result);
  });
});

// Add new user
app.post("/users", (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: "Name is required" });
  }

  db.query(
    "INSERT INTO users (name) VALUES (?)",
    [name],
    (err, result) => {
      if (err) {
        console.error("Error adding user:", err);
        return res.status(500).json({ error: "Database error" });
      }

      res.json({
        id: result.insertId,
        name
      });
    }
  );
});

// Delete user
app.delete("/users/:id", (req, res) => {
  const { id } = req.params;

  db.query(
    "DELETE FROM users WHERE id = ?",
    [id],
    (err) => {
      if (err) {
        console.error("Error deleting user:", err);
        return res.status(500).json({ error: "Database error" });
      }

      res.sendStatus(200);
    }
  );
});

// =======================
// Start Server
// =======================

// IMPORTANT: listen on 0.0.0.0 for EC2 access
app.listen(3000, "0.0.0.0", () => {
  console.log("Server running on port 3000");
});
