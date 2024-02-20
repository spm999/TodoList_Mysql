const express = require('express');
const app = express();
const db = require('./db.js');
const cors=require('cors');

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors())

// Import route files
const getTasksRoute = require('./routes/getTasks');
const addTasksRoute = require('./routes/addTasks');
const updateTaskRoute = require('./routes/updateTask');
const deleteTaskRoute = require('./routes/deleteTask');

// Use route files
app.use('/', getTasksRoute);
app.use('/', addTasksRoute);
app.use('/', updateTaskRoute);
app.use('/', deleteTaskRoute);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
