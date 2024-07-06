import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Dialog } from "primereact/dialog";

import { Button } from "primereact/button";

const AddTaskForm = ({ createTask }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [visibleDialog, setVisibleDialog] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({ name, description, status: "not started" });
    setName("");
    setDescription("");
    setVisibleDialog(false)
  };

  return (
    <React.Fragment>
      <Dialog
        header="Add New Task"
        visible={visibleDialog}
        style={{ width: "50vw" }}
        onHide={() => {
          if (!visibleDialog) return;
          setVisibleDialog(false);
        }}
      >
        <div className="p-fluid">
          <form onSubmit={handleSubmit}>
            <InputText
              className="w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Task Name"
            />

            <InputTextarea
              className="w-full mt-3 mb-3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              placeholder="Task Description"
            />
            <Button label="Add Task" />
          </form>
        </div>
      </Dialog>
      <Button
        label="Add new task"
        icon="pi pi-external-link"
        severity="info"
        onClick={() => setVisibleDialog(true)}
      />
    </React.Fragment>
  );
};

export default AddTaskForm;
