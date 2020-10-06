import React from "react";
import TasksList from "../../components/TasksList/TasksList";

export const DoneView = () => {
  return (
    <div>
      <TasksList tasksType={"done"} />
    </div>
  );
};
