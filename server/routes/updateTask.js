const express = require('express');
const app = express();
const db=require('../db.js')
const router = express.Router();


//////////////////////////////////////////////////////////////////
router.put('/updateTask/:id', (req, res) => {
    const id = req.params.id;
    const { completed } = req.body;

    // Validate the incoming data
    if (typeof completed !== 'boolean') {
        return res.status(400).json({ message: 'Invalid request body' });
    }

    // SQL query to update the task's completed status
    const sql = `UPDATE tasks SET completed = ? WHERE id = ?`;

    // Values to be updated in the query
    const values = [completed, id];

    // Execute the SQL query
    db.query(sql, values, (error, results) => {
        if (error) {
            console.error('Error updating task:', error);
            return res.status(500).json({ message: 'Internal server error' });
        }
        // Check if the task was found and updated
        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'Task not found' });
        }
        // Send a success response
        res.status(200).json({ message: 'Task updated successfully' });
    });
});

module.exports = router;
