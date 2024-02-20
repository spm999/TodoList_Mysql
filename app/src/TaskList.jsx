import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './TaskList.css';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState({ title: '', description: '', completed: false });

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            const response = await axios.get('http://localhost:3000/getTasks');
            setTasks(response.data);
        } catch (error) {
            console.error('Error fetching tasks:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewTask((prevTask) => ({ ...prevTask, [name]: value }));
    };

    const addTask = async () => {
        try {
            await axios.post('http://localhost:3000/addTasks', newTask);
            fetchTasks();
            setNewTask({ title: '', description: '', completed: false });
        } catch (error) {
            console.error('Error adding task:', error);
        }
    };

    const toggleCompletion = async (taskId, completed) => {
        try {
            await axios.put(`http://localhost:3000/updateTask/${taskId}`, { completed });
            fetchTasks();
        } catch (error) {
            console.error('Error toggling completion:', error);
        }
    };

    const deleteTask = async (taskId) => {
        try {
            await axios.delete(`http://localhost:3000/deleteTask/${taskId}`);
            fetchTasks();
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };

    return (
        <div className="task-list-container">
            <h2>Add New Task</h2>
            <form onSubmit={addTask}>
                <input
                    className="task-input"
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={newTask.title}
                    onChange={handleInputChange}
                    required
                />
                <input
                    className="task-input"
                    type="text"
                    name="description"
                    placeholder="Description"
                    value={newTask.description}
                    onChange={handleInputChange}
                    required
                />
                <button className="add-button">Add Task</button>
            </form>

            <h1>Task List</h1>
            <table className="task-table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Completed</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task) => (
                        <tr key={task.id}>
                            <td>{task.title}</td>
                            <td>{task.description}</td>
                            <td>
                                <input
                                    type="checkbox"
                                    checked={task.completed}
                                    onChange={() => toggleCompletion(task.id, !task.completed)}
                                />
                            </td>
                            <td>
                                <button className="delete-button" onClick={() => deleteTask(task.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TaskList;
