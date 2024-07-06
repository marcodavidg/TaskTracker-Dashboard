import React from "react";
import { useDrop } from "react-dnd";
import TaskCard from "./TaskCard";
import { Panel } from "primereact/panel";


const TaskColumn = ({ status, tasks, updateTaskStatus, deleteTask }) => {
  const [{ isOver }, drop] = useDrop({
    accept: "TASK",
    drop: (item) => updateTaskStatus(item.id, status),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div ref={drop} style={{minHeight:`100%`}} >
      <Panel 
        style={{ background: isOver ? "#e0e0e0" : "#f0f0f0" }}
        header={status.toUpperCase()}
      >
        {tasks.map((task) => (
          <TaskCard
            key={task._id}
            task={task}
            updateTaskStatus={updateTaskStatus}
            deleteTask={deleteTask}
          />
        ))}
      </Panel>
    </div>

  );
};

export default TaskColumn;
