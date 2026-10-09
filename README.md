# Bytexl Task 2

Frontend: React
Backend: Node.js + Express
Database: MySQL (XAMPP)

## Database Details

- Database Name: studentdb2
- Table Name: students2
- Host: localhost
- User: root
- Password: (empty)

## Table Structure

| Column | Type |
| -------- | ------ |
| id | INT AUTO_INCREMENT PRIMARY KEY |
| name | VARCHAR(100) |
| age | INT |
| mark | INT |
| cgpa | DECIMAL(3,2) |

## SQL

CREATE TABLE students2 (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    age INT,
    mark INT,
    cgpa DECIMAL(3,2)
);
