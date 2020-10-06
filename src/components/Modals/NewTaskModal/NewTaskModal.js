import React, { useState, useEffect } from "react";
import NewTaskModel from "../../../models/taskModel";

const NewTaskModal = ({ visible }) => {
  const [tasks, updateList] = useState(
    JSON.parse(localStorage.getItem("tasks"))
  );
  useEffect(() => {
    console.log(tasks);
  }, []);

  let [newTask, newTaskData] = useState({
    name: "",
    finalDate: "",
  });

  const nameHandler = (e) => {
    newTaskData({
      name: e.target.value,
      finalDate: newTask.finalDate,
    });
  };

  const finalDateHandler = (e) => {
    newTaskData({
      name: newTask.name,
      finalDate: e.target.value,
    });
  };

  const saveNewTask = () => {
    if (tasks === null) {
      localStorage.setItem("tasks", JSON.stringify([]));
    }
    const newTasksContainer = JSON.parse(localStorage.getItem("tasks"));
    newTasksContainer.push(new NewTaskModel(newTask.name, newTask.finalDate));
    localStorage.setItem("tasks", JSON.stringify(newTasksContainer));
  };

  return visible ? (
    <>
      <form
        onSubmit={() => {
          alert(`${newTask.name}, ${newTask.finalDate}`);
        }}
      >
        <div>
          <label htmlFor="taskName">Nazwa zadania</label>
          <input type="text" id="taskName" onChange={nameHandler} />
        </div>
        <div>
          <label htmlFor="taskDate">Termin na wykonanie zadania</label>
          <input type="date" id="taskDate" onChange={finalDateHandler} />
        </div>
        <input type="submit" value="Dodaj zadanie" onClick={saveNewTask} />
      </form>
      <button onClick={() => console.log(newTask)}>stan</button>
    </>
  ) : null;
};

export default NewTaskModal;
