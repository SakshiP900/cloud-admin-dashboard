const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "cloudapp.cbcqc2iu6rid.ap-south-1.rds.amazonaws.com",
  user: "admin",
  password: "password",
  database: "cloudapp"
});

db.connect(err => {
  if (err) throw err;
  console.log("MySQL Connected");
});

module.exports = db;

