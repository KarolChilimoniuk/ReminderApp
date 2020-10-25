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
            .sort((a, b) => {
              return new Date(a.term) - new Date(b.term);
            })
            .map((taskToShow) => (
              <li className={styles.list_element_done} key={taskToShow.id}>
                <h3 className={styles.list_paragraph}>
                  Zadanie:{" "}
                  <span className={styles.span}>{taskToShow.name}</span>
                </h3>
                <h3 className={styles.list_paragraph}>
                  Termin: <span className={styles.span}>{taskToShow.term}</span>
                </h3>
                <img
                  className={styles.list_element_image}
                  src={removeIcon}
                  alt="remove task"
                  onClick={() => removeTask(taskToShow.id)}
                />
                <img
                  className={styles.list_element_image}
                  src={doneRect}
                  alt="done task"
                  onClick={() => setStatus(taskToShow.id)}
                />
              </li>
            )))
        : (tasksToShow = userTasks
            .filter((task) => task.done === false)
            .sort((a, b) => {
              return new Date(a.term) - new Date(b.term);
            })
            .map((taskToShow) => (
              <li className={styles.list_element} key={taskToShow.id}>
                <h3 className={styles.list_paragraph}>
                  Zadanie:{" "}
                  <span className={styles.span}>{taskToShow.name}</span>
                </h3>
                <h3 className={styles.list_paragraph}>
                  Termin: <span className={styles.span}>{taskToShow.term}</span>
                </h3>
                <img
                  className={styles.list_element_image}
                  src={removeIcon}
                  alt="remove task"
                  onClick={() => removeTask(taskToShow.id)}
                />
                <img
                  className={styles.list_element_image}
                  src={emptyRect}
                  alt="not done"
                  onClick={() => setStatus(taskToShow.id)}
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
            <li className={styles.list_element_done} key={taskToShow.id}>
              <h3 className={styles.list_paragraph}>
                Zadanie: <span className={styles.span}>{taskToShow.name}</span>
              </h3>
              <h3 className={styles.list_paragraph}>
                Termin: <span className={styles.span}>{taskToShow.term}</span>
              </h3>
              <img
                className={styles.list_element_image}
                src={removeIcon}
                alt="remove task"
                onClick={() => removeTask(taskToShow.id)}
              />
              <img
                className={styles.list_element_image}
                src={doneRect}
                alt="done task"
                onClick={() => setStatus(taskToShow.id)}
              />
            </li>
          ) : (
            <li className={styles.list_element} key={taskToShow.id}>
              <h3 className={styles.list_paragraph}>
                Zadanie: <span className={styles.span}>{taskToShow.name}</span>
              </h3>
              <h3 className={styles.list_paragraph}>
                Termin: <span className={styles.span}>{taskToShow.term}</span>
              </h3>
              <img
                className={styles.list_element_image}
                src={removeIcon}
                alt="remove task"
                onClick={() => removeTask(taskToShow.id)}
              />
              <img
                className={styles.list_element_image}
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
