import React, { useRef } from "react";
import { useDrag } from "react-dnd";
import { Card } from "primereact/card";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import "primeicons/primeicons.css"; // icons
import { ConfirmPopup, confirmPopup } from "primereact/confirmpopup";
import { Toast } from "primereact/toast";

const TaskCard = ({ task, updateTaskStatus, deleteTask }) => {
  const status = ["not started", "ongoing", "finished"];

  const confirm2 = (event) => {
    console.log(task._id);
    confirmPopup({
      target: event.currentTarget,
      message: "Do you want to delete this record?",
      defaultFocus: "reject",
      acceptClassName: "p-button-danger",
      icon: "pi pi-info-circle",
      accept: () => {
        deleteTask(task._id);
      },
    });
  };

  const footer = (
    <Button
      rounded
      size="small"
      label="Delete"
      severity="danger"
      icon="pi pi-times"
      onClick={confirm2}
      style={{ marginLeft: "0.5em" }}
    />
  );

  const [{ isDragging }, drag] = useDrag({
    type: "TASK",
    item: { id: task._id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <React.Fragment>
      <ConfirmPopup />
      <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
        <Card className="m-2" title={task.name} footer={footer}>
          <p>{task.description}</p>

          <div className="card flex justify-content-center">
            <Dropdown
              value={task.status}
              onChange={(e) => updateTaskStatus(task._id, e.value)}
              options={status}
              optionLabel="name"
              placeholder="Change status"
              className="w-full md:w-14rem"
            />
          </div>
        </Card>
      </div>
    </React.Fragment>
  );
};

export default TaskCard;
