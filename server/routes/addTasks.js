const express = require('express');
const app = express();
const db=require('../db.js')
const router = express.Router();


router.post('/addTasks', (req, res) => {
    // Destructure the incoming request body
    const { title, description, completed } = req.body;

    // Validate the incoming data
    if (!title || !description || typeof completed !== 'boolean') {
        return res.status(400).json({ message: 'Invalid request body' });
    }

    // SQL query to insert a new task into the tasks table
    const sql = `INSERT INTO tasks (title, description, completed) VALUES (?, ?, ?)`;

    // Values to be inserted into the query
    const values = [title, description, completed];

    // Execute the SQL query
    db.query(sql, values, (error, results) => {
        if (error) {
            console.error('Error adding task:', error);
            return res.status(500).json({ message: 'Internal server error' });
        }
        // Send a success response with the newly created task ID
        res.status(201).json({ id: results.insertId, title, description, completed });
    });
});

module.exports = router;
