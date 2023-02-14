import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import {
  nameHandler,
  finalDateHandler,
  saveNewTask,
} from "../../../utils/newTaskModal";
import NewTaskModel from "../../../models/taskModel";
import Cross from "../../../images/icons/error.svg";
import styles from "./NewTaskModal.module.css";

const NewTaskModal = ({ visible, onClickHandler }) => {
  const history = useHistory();

  let [newTask, setNewTaskData] = useState({
    name: "",
    finalDate: "",
  });

  return visible ? (
    <div className={styles.newTask__background}>
      <div className={styles.newTask__form_container}>
        <img
          className={styles.newTask__image}
          src={Cross}
          alt="close"
          onClick={onClickHandler}
        />
        <form
          className={styles.newTask__form}
          onSubmit={() => {
            if (newTask.finalDate !== "" && newTask.name !== "") {
              alert(
                `New task is added: ${newTask.name}, \nFinal date: ${newTask.finalDate}`
              );
              history.push("/undone");
              onClickHandler();
              setNewTaskData({
                name: "",
                finalDate: "",
              });
            }
          }}
        >
          <div className={styles.newTask__form_element}>
            <label className={styles.newTask__label} htmlFor="taskName">
              Task name
            </label>
            <input
              className={styles.newTask__input}
              type="text"
              id="taskName"
              onChange={(e) => nameHandler(e, newTask, setNewTaskData)}
              placeholder="Task name"
              value={newTask.name}
            />
          </div>
          <div className={styles.newTask__form_element}>
            <label className={styles.newTask__label} htmlFor="taskDate">
              Final date
            </label>
            <input
              className={styles.newTask__input}
              type="date"
              id="taskDate"
              onChange={(e) => finalDateHandler(e, newTask, setNewTaskData)}
            />
          </div>
          <input
            className={styles.newTask__submit}
            type="submit"
            value="Add task"
            onClick={() => saveNewTask(newTask, NewTaskModel)}
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
