import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import NewTaskModel from "../../../models/taskModel";
import Cross from "../../../images/icons/error.svg";
import styles from "./NewTaskModal.module.css";

const NewTaskModal = ({ visible, onClickHandler }) => {
  const history = useHistory();
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
    console.log(e.target.value);
    newTaskData({
      name: newTask.name,
      finalDate: e.target.value,
    });
  };

  const saveNewTask = () => {
    if (newTask.finalDate !== "" && newTask.name !== "") {
      const newTasksContainer = JSON.parse(localStorage.getItem("tasks"));
      newTasksContainer.push(new NewTaskModel(newTask.name, newTask.finalDate));
      localStorage.setItem("tasks", JSON.stringify(newTasksContainer));
    } else {
      alert("Set task name and final date!");
    }
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
            if (newTask.finalDate !== "" && newTask.name !== "") {
              alert(
                `New task is added: ${newTask.name}, \nFinal date: ${newTask.finalDate}`
              );
              history.push("/undone");
              onClickHandler();
              newTaskData({
                name: "",
                finalDate: "",
              });
            }
          }}
        >
          <div className={styles.form_element}>
            <label className={styles.label} htmlFor="taskName">
              Task name
            </label>
            <input
              className={styles.input}
              type="text"
              id="taskName"
              onChange={nameHandler}
              placeholder="Task name"
              value={newTask.name}
            />
          </div>
          <div className={styles.form_element}>
            <label className={styles.label} htmlFor="taskDate">
              Final date
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
            value="Add task"
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
