import React, { useState } from "react";
import PropTypes from "prop-types";
import NewTaskModel from "../../../models/taskModel";
import Cross from "../../../images/icons/error.svg";
import styles from "./NewTaskModal.module.css";

const NewTaskModal = ({ visible, onClickHandler }) => {
  const [tasks] = useState(JSON.parse(localStorage.getItem("tasks")));

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
    const newTasksContainer = JSON.parse(localStorage.getItem("tasks"));
    newTasksContainer.push(new NewTaskModel(newTask.name, newTask.finalDate));
    localStorage.setItem("tasks", JSON.stringify(newTasksContainer));
  };

  return visible ? (
    <div className={styles.background}>
      <div className={styles.form_container}>
        <img
          className={styles.image}
          src={Cross}
          alt="close"
          onClick={onClickHandler}
        />
        <form
          className={styles.form}
          onSubmit={() => {
            alert(
              `Dodałeś nowe zadanie: ${newTask.name}, \nTermin: ${newTask.finalDate}`
            );
          }}
        >
          <div className={styles.form_element}>
            <label className={styles.label} htmlFor="taskName">
              Nazwa zadania
            </label>
            <input
              className={styles.input}
              type="text"
              id="taskName"
              onChange={nameHandler}
              placeholder="Zadanie"
            />
          </div>
          <div className={styles.form_element}>
            <label className={styles.label} htmlFor="taskDate">
              Termin
            </label>
            <input
              className={styles.input}
              type="date"
              id="taskDate"
              onChange={finalDateHandler}
            />
          </div>
          <input
            className={styles.submit}
            type="submit"
            value="Dodaj zadanie"
            onClick={saveNewTask}
          />
        </form>
      </div>
    </div>
  ) : null;
};

NewTaskModal.propTypes = {
  visible: PropTypes.bool,
  onClickHandler: PropTypes.func,
};

export default NewTaskModal;
