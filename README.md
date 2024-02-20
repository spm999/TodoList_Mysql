# Task Management Application
This is a simple task management application built using React for the frontend, Express.js for the backend, and MySQL for data storage.

### About Task Management

Task management is the process of organizing and tracking tasks or activities to ensure that work is completed efficiently and effectively.

### Setting up MySQL with XAMPP

To use MySQL for data storage in this application, you can set up MySQL using XAMPP, a popular cross-platform web server solution stack package. Here's how to set up MySQL using XAMPP:

#### Download XAMPP: 
Download XAMPP and install it on your system.
#### Start XAMPP: 
Start the XAMPP control panel and start the Apache and MySQL services.
#### Access phpMyAdmin: 
Open the phpMyAdmin interface by clicking on the "Admin" button next to the MySQL module in the XAMPP control panel.
#### Create Database: 
Create a new database named task_management or any preferred name.
#### Import SQL File: 
Import the provided SQL file (tasks.sql) into your newly created database. This file contains the necessary table structure for storing tasks.

### Clone the Repository: 

Clone the repository to your local machine.
   ```bash
   git clone https://github.com/spm999/TodoList_Mysql.git
   ```
Navigate to Project Directory: Open the project directory in your terminal.
    ```bash
    cd server
    ```
Install Dependencies: Install the necessary dependencies using npm in both app and server.
    ```bash
    npm install
    ```
Start Backend Server: Start the backend server.
    ```bash
    npm start
    ```
Start Frontend Development Server: Navigate to the frontend directory and start the frontend development server.
    ```bash
    cd app
    npm run dev
    ```
### Access Application: Access the application in your web browser at http://localhost:3000.


## Dependencies
1. React
2. Express.js
3. MySQL
4. Axios



