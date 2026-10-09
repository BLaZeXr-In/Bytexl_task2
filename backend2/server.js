const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "studentdb2"
});

db.connect((err) => {
    if (err) {
        console.log("Database connection failed");
    } else {
        console.log("MySQL connected");
    }
});

app.post("/students2", (req, res) => {
    const { name, age, mark } = req.body;

    const cgpa = mark / 10;

    const sql = `
        INSERT INTO students2 (name, age, mark, cgpa)
        VALUES (?, ?, ?, ?)
    `;

    db.query(sql, [name, age, mark, cgpa], (err, result) => {

        if (err) {
            console.log(err);

            return res.status(500).json({
                message: "Database error"
            });
        }

        res.json({
            message: "Student saved successfully",
            name: name,
            cgpa: cgpa
        });
    });
});

app.get("/", (req, res) => {
    res.send("Student API is working");
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
