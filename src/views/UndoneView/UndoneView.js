import React from "react";
import TasksList from "../../components/TasksList/TasksList";

export const UndoneView = ({ allTasks }) => {
  return (
    <div>
      <TasksList allTasks={allTasks} tasksType={"undone"} />
    </div>
  );
};
