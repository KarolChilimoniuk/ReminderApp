import React, { useState, useEffect } from "react";
import NewTaskModel from "../../../models/taskModel";
import styles from './NewTaskModal.module.css';

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
    <div className={styles.background}>
      <div className={styles.form_container}>
        <form
          className = {styles.form}
          onSubmit={() => {
            alert(`${newTask.name}, ${newTask.finalDate}`);
          }}
        >
          <div className = {styles.form_element}>
            <label className={styles.label} htmlFor="taskName">Nazwa zadania</label>
            <input className={styles.input} type="text" id="taskName" onChange={nameHandler} />
          </div>
          <div className = {styles.form_element}> 
            <label className={styles.label} htmlFor="taskDate">Termin</label>
            <input className={styles.input} type="date" id="taskDate" onChange={finalDateHandler} />
          </div>
          <input className={styles.submit} type="submit" value="Dodaj zadanie" onClick={saveNewTask} />
        </form>
        <button onClick={() => console.log(newTask)}>stan</button>
      </div>
    </div>
  ) : null;
};

export default NewTaskModal;
