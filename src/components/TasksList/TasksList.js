import React, { useState } from "react";
import removeIcon from "../../images/icons/minus 1.png";
import doneRect from "../../images/icons/doneRect.png";
import emptyRect from "../../images/icons/emptyRect.png";
import styles from "./TaskList.module.css";

const TasksList = ({ tasksType }) => {
  const [userTasks, updateTasksList] = useState(
    JSON.parse(localStorage.getItem("tasks"))
  );

  let tasksToShow;

  const removeTask = async (id) => {
    let tasks = [...userTasks];
    if (tasks.length - 1 < 1) {
      tasks = [];
    } else {
      tasks = tasks.filter((task) => task.id !== id);
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
    updateTasksList(() => tasks);
  };

  const setStatus = (id) => {
    let tasks = [...userTasks];
    const task = tasks.find((taskToFind) => taskToFind.id === id);
    task.done = !task.done;
    tasks = tasks.map((el) => (el.id === task.id ? task : el));
    localStorage.setItem("tasks", JSON.stringify(tasks));
    updateTasksList(tasks);
    console.log(userTasks, id);
  };

  if (userTasks.length !== 0) {
    if (tasksType !== "all") {
      tasksType === "done"
        ? (tasksToShow = userTasks
            .filter((task) => task.done === true)
            .map((taskToShow) => (
              <li className={styles.listElement} key={taskToShow.id}>
                <h3 className={styles.listParagraph}>
                  Zadanie:{" "}
                  <span className={styles.span}>{taskToShow.name}</span>
                </h3>
                <h3 className={styles.listParagraph}>
                  Termin: <span className={styles.span}>{taskToShow.term}</span>
                </h3>
                <img
                  className={styles.listElementImage}
                  src={removeIcon}
                  alt="remove task"
                  onClick={() => removeTask(taskToShow.id)}
                />
                <img
                  className={styles.listElementImage}
                  src={doneRect}
                  alt="done task"
                  onClick={() => setStatus(taskToShow.id)}
                />
              </li>
            )))
        : (tasksToShow = userTasks
            .filter((task) => task.done === false)
            .map((taskToShow) => (
              <li className={styles.listElement} key={taskToShow.id}>
                <h3 className={styles.listParagraph}>
                  Zadanie:{" "}
                  <span className={styles.span}>{taskToShow.name}</span>
                </h3>
                <h3 className={styles.listParagraph}>
                  Termin: <span className={styles.span}>{taskToShow.term}</span>
                </h3>
                <img
                  className={styles.listElementImage}
                  src={removeIcon}
                  alt="remove task"
                  onClick={() => removeTask(taskToShow.id)}
                />
                <img
                  className={styles.listElementImage}
                  src={emptyRect}
                  alt="not done"
                  onClick={() => setStatus(taskToShow.id)}
                />
              </li>
            )));
    } else if (tasksType === "all") {
      tasksToShow = userTasks.map((taskToShow) =>
        taskToShow.done === true ? (
          <li className={styles.listElement} key={taskToShow.id}>
            <h3 className={styles.listParagraph}>
              Zadanie: <span className={styles.span}>{taskToShow.name}</span>
            </h3>
            <h3 className={styles.listParagraph}>
              Termin: <span className={styles.span}>{taskToShow.term}</span>
            </h3>
            <img
              className={styles.listElementImage}
              src={removeIcon}
              alt="remove task"
              onClick={() => removeTask(taskToShow.id)}
            />
            <img
              className={styles.listElementImage}
              src={doneRect}
              alt="done task"
              onClick={() => setStatus(taskToShow.id)}
            />
          </li>
        ) : (
          <li className={styles.listElement} key={taskToShow.id}>
            <h3 className={styles.listParagraph}>
              Zadanie: <span className={styles.span}>{taskToShow.name}</span>
            </h3>
            <h3 className={styles.listParagraph}>
              Termin: <span className={styles.span}>{taskToShow.term}</span>
            </h3>
            <img
              className={styles.listElementImage}
              src={removeIcon}
              alt="remove task"
              onClick={() => removeTask(taskToShow.id)}
            />
            <img
              className={styles.listElementImage}
              src={emptyRect}
              alt="not done"
              onClick={() => setStatus(taskToShow.id)}
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
    return <h3 className={styles.paragraph}>Brak zadań</h3>;
  }
};
export default TasksList;
