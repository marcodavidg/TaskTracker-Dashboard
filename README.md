# Task Tracker Dashboard

This task tracker dashboard is a web application designed to help you manage your tasks efficiently. It allows you to add, move, and delete tasks between different status columns using drag-and-drop functionality. 
The application is built using the MERN stack (MongoDB, Express, React, Node.js).
It also uses the PrimeReact framework to ease the graphical look implementation.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Screenshots](#screenshots)

## Features

- Add new tasks with a name and description.
- View tasks grouped by status: "Not Started", "Ongoing", and "Finished".
- Move tasks between different status columns using drag-and-drop or a status dropdown.

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

You will need to have the following installed:

- Node.js
- MongoDB

### Installation

1. Clone the repository

```
git clone https://github.com/username/task-tracker.git
```

2. Install dependencies for both the server and client

```bash
cd backend
npm install
cd ../frontend
npm install
```

3. Create a .env file in the root directory and add the following environment variables:

```
MONGODB_URI=mongodb+srv://<user>:<password>@cluster0.0c0jc1f.mongodb.net/<DB>?retryWrites=true&w=majority&appName=Cluster0
```

4. Start the both servers, the frontend and the backend

5. The server will start on http://localhost:5000 and the client on http://localhost:3000.

### Usage
Once the application is running, you can:

- Add new tasks using the "Add Task" button.
- Drag and drop tasks between columns to change their status.
- Delete tasks

### API Endpoints
GET /api/tasks - Get all tasks
POST /api/tasks - Create a new task
PUT /api/tasks/:id - Update a task
DELETE /api/tasks/:id - Delete a task

### Screenshots

![Screenshot from 2024-07-05 23-39-32](https://github.com/marcodavidg/ToDo-Dashboard/assets/11068920/ed6904bb-0683-4fd2-b8f4-633f98eb32a9)

![Screenshot from 2024-07-06 00-06-22](https://github.com/marcodavidg/ToDo-Dashboard/assets/11068920/4702bb34-dc73-4226-9c05-c3893ed3e88a)

![Screenshot from 2024-07-06 00-06-59](https://github.com/marcodavidg/ToDo-Dashboard/assets/11068920/ae80ebe1-12f1-475d-82e4-d58fa622cd69)

![Screenshot from 2024-07-06 00-07-43](https://github.com/marcodavidg/ToDo-Dashboard/assets/11068920/2f7e5d25-18d1-4001-a174-a4bfbcdf9777)

![Screenshot from 2024-07-06 00-08-26](https://github.com/marcodavidg/ToDo-Dashboard/assets/11068920/925eae70-7820-4f1c-8bd2-07f894a55b0c)
