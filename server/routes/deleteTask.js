const express = require('express');
const app = express();
const db=require('../db.js')
const router = express.Router();

/////////////////////////////////////////////////////////////////////////

router.delete('/deleteTask/:id', (req, res) => {
    const id = req.params.id;

    // SQL query to delete the task
    const sql = `DELETE FROM tasks WHERE id = ?`;

    // Execute the SQL query
    db.query(sql, [id], (error, results) => {
        if (error) {
            console.error('Error deleting task:', error);
            return res.status(500).json({ message: 'Internal server error' });
        }
        // Check if the task was found and deleted
        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'Task not found' });
        }
        // Send a success response
        res.status(200).json({ message: 'Task deleted successfully' });
    });
});


module.exports = router;
