import React, { useState } from "react";
//import Task from "../../../models/taskModel";

const NewTaskModal = ({ visible }) => {
  let [TaskName, newTaskName] = useState("");
  let [TaskFinalDate, newTaskFinalDate] = useState("");

  const nameHandler = (e) => {
    newTaskName(e.target.value);
    console.log(TaskName);
  };

  const finalDateHandler = (e) => {
    newTaskFinalDate(e.target.value);
    console.log(e.target.value);
    console.log(TaskFinalDate);
  };

  return visible ? (
    <form
      onSubmit={() => {
        alert(`${TaskFinalDate}, ${TaskName}`);
      }}
    >
      <div>
        <label htmlFor="taskName">Nazwa zadania</label>
        <input
          type="text"
          id="taskName"
          //value={newTask.name}
          onChange={nameHandler}
        />
      </div>
      <div>
        <label htmlFor="taskDate">Termin na wykonanie zadania</label>
        <input type="date" id="taskDate" onChange={finalDateHandler} />
      </div>
      <input type="submit" value="Dodaj zadanie" />
    </form>
  ) : null;
};

export default NewTaskModal;
