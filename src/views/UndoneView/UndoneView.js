import React from "react";
import TasksList from "../../components/TasksList/TasksList";

export const UndoneView = () => {
  return (
    <div>
      <TasksList tasksType={"undone"} />
    </div>
  );
};
