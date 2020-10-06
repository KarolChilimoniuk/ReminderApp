import React, { useState, useEffect } from "react";
import removeIcon from "../../images/icons/minus 1.png";
import doneRect from "../../images/icons/doneRect.png";
import emptyRect from "../../images/icons/emptyRect.png";

const TasksList = ({ tasksType }) => {
  const [userTasks, updateTasksList] = useState(
    JSON.parse(localStorage.getItem("tasks"))
  );
  useEffect(() => {
    console.log(userTasks);
  }, []);

  let tasksToShow;

  const removeTask = (id) => {
    let tasks = [...userTasks];
    if (tasks.length - 1 < 1) {
      tasks = null;
    } else {
      tasks = tasks.filter((task) => task.id !== id);
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
    updateTasksList(tasks);
    console.log(userTasks, id);
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

  if (userTasks !== null) {
    if (tasksType !== "all") {
      return tasksType === "done"
        ? (tasksToShow = userTasks
            .filter((task) => task.done === true)
            .map((taskToShow) => (
              <div>
                <li>{taskToShow.name}</li>
                <img
                  src={removeIcon}
                  alt="remove task"
                  onClick={() => removeTask(taskToShow.id)}
                />
                <img
                  src={doneRect}
                  alt="doneTask"
                  onClick={() => setStatus(taskToShow.id)}
                />
              </div>
            )))
        : (tasksToShow = userTasks
            .filter((task) => task.done === false)
            .map((taskToShow) => (
              <div>
                <li>{taskToShow.name}</li>
                <img
                  src={removeIcon}
                  alt="remove task"
                  onClick={() => removeTask(taskToShow.id)}
                />
                <img
                  src={emptyRect}
                  alt="udoneTask"
                  onClick={() => setStatus(taskToShow.id)}
                />
              </div>
            )));
    } else if (tasksType === "all") {
      tasksToShow = userTasks.map((taskToShow) =>
        taskToShow.done === true ? (
          <div>
            <li>{taskToShow.name}</li>
            <img
              src={removeIcon}
              alt="remove task"
              onClick={() => removeTask(taskToShow.id)}
            />
            <img
              src={doneRect}
              alt="doneTask"
              onClick={() => setStatus(taskToShow.id)}
            />
          </div>
        ) : (
          <div>
            <li>{taskToShow.name}</li>
            <img
              src={removeIcon}
              alt="remove task"
              onClick={() => removeTask(taskToShow.id)}
            />
            <img
              src={emptyRect}
              alt="udoneTask"
              onClick={() => setStatus(taskToShow.id)}
            />
          </div>
        )
      );
    }
  } else {
    tasksToShow = null;
  }

  if (tasksToShow !== null) {
    return <ul>{tasksToShow}</ul>;
  } else {
    return <li>Brak zadań</li>;
  }
};
export default TasksList;
