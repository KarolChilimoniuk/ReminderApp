import React, { useState, useEffect } from "react";
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

  if (allTasks !== null) {
    if (tasksType !== "all") {
      return tasksType === "done"
        ? (tasksToShow = allTasks
            .filter((task) => task.status === "done")
            .map((taskToShow) => (
              <div>
                <li>{taskToShow.name}</li>
                <img
                  src={removeIcon}
                  alt="remove task"
                  onClick={() => removeTask(taskToShow.id)}
                />
                <img src={doneRect} alt="doneTask" />
              </div>
            )))
        : (tasksToShow = allTasks
            .filter((task) => task.status === "undone")
            .map((taskToShow) => (
              <div>
                <li>{taskToShow.name}</li>
                <img
                  src={removeIcon}
                  alt="remove task"
                  onClick={() => removeTask(taskToShow.id)}
                />
                <img src={emptyRect} alt="udoneTask" />
              </div>
            )));
    } else {
      tasksToShow = allTasks.map((taskToShow) =>
        taskToShow.status === "done" ? (
          <div>
            <li>{taskToShow.name}</li>
            <img
              src={removeIcon}
              alt="remove task"
              onClick={() => removeTask(taskToShow.id)}
            />
            <img src={doneRect} alt="doneTask" />
          </div>
        ) : (
          <div>
            <li>{taskToShow.name}</li>
            <img
              src={removeIcon}
              alt="remove task"
              onClick={() => removeTask(taskToShow.id)}
            />
            <img src={emptyRect} alt="udoneTask" />
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
