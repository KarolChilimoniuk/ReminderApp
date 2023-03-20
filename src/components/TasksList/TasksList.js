import React, { useState } from "react";
import PropTypes from "prop-types";
import removeIcon from "../../images/icons/delete.svg";
import doneRect from "../../images/icons/check.svg";
import emptyRect from "../../images/icons/undone.svg";
import { removeTask, setStatus } from "../../utils/tasksList";
import styles from "./TaskList.module.css";

const TasksList = ({ tasksType }) => {
  const [userTasks, updateTasksList] = useState(
    JSON.parse(localStorage.getItem("tasks"))
  );

  let tasksToShow;

  if (userTasks !== null && userTasks.length !== 0) {
    if (tasksType !== "all") {
      tasksType === "done"
        ? (tasksToShow = userTasks
            .filter((task) => task.done === true)
            .sort((a, b) => {
              return new Date(a.term) - new Date(b.term);
            })
            .map((taskToShow) => (
              <li className={styles.list__element_done} key={taskToShow.id}>
                <h3 className={styles.list__paragraph}>
                  Task:{" "}
                  <span className={styles.list__span}>{taskToShow.name}</span>
                </h3>
                <h3 className={styles.list__paragraph}>
                  Final date:{" "}
                  <span className={styles.list__span}>{taskToShow.term}</span>
                </h3>
                <img
                  className={styles.list__element_image}
                  src={removeIcon}
                  alt="remove task"
                  onClick={() =>
                    removeTask(taskToShow.id, userTasks, updateTasksList)
                  }
                />
                <img
                  className={styles.list__element_image}
                  src={doneRect}
                  alt="done task"
                  onClick={() =>
                    setStatus(taskToShow.id, userTasks, updateTasksList)
                  }
                />
              </li>
            )))
        : (tasksToShow = userTasks
            .filter((task) => task.done === false)
            .sort((a, b) => {
              return new Date(a.term) - new Date(b.term);
            })
            .map((taskToShow) => (
              <li className={styles.list__element} key={taskToShow.id}>
                <h3 className={styles.list__paragraph}>
                  Task:{" "}
                  <span className={styles.list__span}>{taskToShow.name}</span>
                </h3>
                <h3 className={styles.list__paragraph}>
                  Final date:{" "}
                  <span className={styles.span}>{taskToShow.term}</span>
                </h3>
                <img
                  className={styles.list__element_image}
                  src={removeIcon}
                  alt="remove task"
                  onClick={() =>
                    removeTask(taskToShow.id, userTasks, updateTasksList)
                  }
                />
                <img
                  className={styles.list__element_image}
                  src={emptyRect}
                  alt="not done"
                  onClick={() =>
                    setStatus(taskToShow.id, userTasks, updateTasksList)
                  }
                />
              </li>
            )));
    } else if (tasksType === "all") {
      tasksToShow = userTasks
        .sort((a, b) => {
          return new Date(a.term) - new Date(b.term);
        })
        .map((taskToShow) =>
          taskToShow.done === true ? (
            <li className={styles.list__element_done} key={taskToShow.id}>
              <h3 className={styles.list__paragraph}>
                Task:{" "}
                <span className={styles.list__span}>{taskToShow.name}</span>
              </h3>
              <h3 className={styles.list__paragraph}>
                Final date:{" "}
                <span className={styles.list__span}>{taskToShow.term}</span>
              </h3>
              <img
                className={styles.list__element_image}
                src={removeIcon}
                alt="remove task"
                onClick={() =>
                  removeTask(taskToShow.id, userTasks, updateTasksList)
                }
              />
              <img
                className={styles.list__element_image}
                src={doneRect}
                alt="done task"
                _
                onClick={() =>
                  setStatus(taskToShow.id, userTasks, updateTasksList)
                }
              />
            </li>
          ) : (
            <li className={styles.list__element} key={taskToShow.id}>
              <h3 className={styles.list__paragraph}>
                Task:{" "}
                <span className={styles.list__span}>{taskToShow.name}</span>
              </h3>
              <h3 className={styles.list__paragraph}>
                Final date:{" "}
                <span className={styles.list__span}>{taskToShow.term}</span>
              </h3>
              <img
                className={styles.list__element_image}
                src={removeIcon}
                alt="remove task"
                onClick={() =>
                  removeTask(taskToShow.id, userTasks, updateTasksList)
                }
              />
              <img
                className={styles.list__element_image}
                src={emptyRect}
                alt="not done"
                onClick={() =>
                  setStatus(taskToShow.id, userTasks, updateTasksList)
                }
              />
            </li>
          )
        );
    }
  } else {
    tasksToShow = null;
  }

  if (tasksToShow !== null) {
    return <ul className={styles.list}>{tasksToShow}</ul>;
  } else {
    return <h3 className={styles.paragraph}>Task list is empty</h3>;
  }
};

TasksList.propTypes = {
  tasksType: PropTypes.string,
};
export default TasksList;
