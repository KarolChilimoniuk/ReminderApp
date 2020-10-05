import React from "react";
import TasksList from "../../components/TasksList/TasksList";

export const DoneView = ({ allTasks }) => {
  return (
    <div>
      <TasksList allTasks={allTasks} tasksType={"done"} />
    </div>
  );
};
