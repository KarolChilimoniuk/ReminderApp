import React from "react";
import removeIcon from "../../images/icons/minus 1.png";
import doneRect from "../../images/icons/doneRect.png";
import emptyRect from "../../images/icons/emptyRect.png";

const TasksList = ({ allTasks, tasksType }) => {
  let tasksToShow;

  const removeTask = (id) => {
    let tasks = [...allTasks];
    if (tasks.length - 1 < 1) {
      tasks = null;
    } else {
      tasks = tasks.filter((task) => task.id !== id);
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
    console.log(allTasks, id);
  };

  const setStatus = (id) => {
    let tasks = [...allTasks];
    const task = tasks.find((taskToFind) => taskToFind.id === id);
    task.done = !task.done;
    tasks = tasks.map((el) => (el.id === task.id ? task : el));
    localStorage.setItem("tasks", JSON.stringify(tasks));
    console.log(allTasks, id);
  };

  if (allTasks !== null) {
    if (tasksType !== "all") {
      return tasksType === "done"
        ? (tasksToShow = allTasks
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
        : (tasksToShow = allTasks
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
      tasksToShow = allTasks.map((taskToShow) =>
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
    return <tasksToShow />;
  } else {
    return <li>Brak zadań</li>;
  }
};
export default TasksList;
