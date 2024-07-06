import React, { useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { fetchTasks, createTask, updateTask, deleteTask } from "./api";
import TaskColumn from "./components/TaskColumn";
import AddTaskForm from "./components/AddTaskForm";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/soho-light/theme.css";
import "primeflex/primeflex.css"; // flex utility

const App = () => {
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    const { data } = await fetchTasks();
    setTasks(data);
  };

  useEffect(() => {
    getTasks();
  }, []);

  const handleCreateTask = async (task) => {
    const { data } = await createTask(task);
    setTasks([...tasks, data]);
  };

  const handleUpdateTaskStatus = async (id, status) => {
    const { data } = await updateTask(id, status);
    setTasks(tasks.map((task) => (task._id === id ? data : task)));
  };

  const handleDeleteTask = async (id) => {
    await deleteTask(id);
    getTasks();
  }

  const notStartedTasks = tasks.filter((task) => task.status === "not started");
  const ongoingTasks = tasks.filter((task) => task.status === "ongoing");
  const finishedTasks = tasks.filter((task) => task.status === "finished");

  return (
    <PrimeReactProvider>
      <DndProvider backend={HTML5Backend}>
        <div>
          <div className="p-4">
            <h1>Task Dashboard</h1>
            <p>Drag and drop tasks to change status</p>
            <AddTaskForm createTask={handleCreateTask} />
          </div>
          <div className="flex">
            <div className="flex-1 p-4 border-round">
              <TaskColumn
                status="not started"
                tasks={notStartedTasks}
                updateTaskStatus={handleUpdateTaskStatus}
                deleteTask={handleDeleteTask}
              />
            </div>
            <div className="flex-1  p-4 border-round">
              <TaskColumn
                status="ongoing"
                tasks={ongoingTasks}
                updateTaskStatus={handleUpdateTaskStatus}
                deleteTask={handleDeleteTask}
              />
            </div>
            <div className="flex-1  p-4 border-round">
              <TaskColumn
                status="finished"
                tasks={finishedTasks}
                updateTaskStatus={handleUpdateTaskStatus}
                deleteTask={handleDeleteTask}
              />
            </div>
          </div>
        </div>
      </DndProvider>
    </PrimeReactProvider>
  );
};

export default App;
