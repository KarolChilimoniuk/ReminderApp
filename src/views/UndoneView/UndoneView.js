import React from "react";
import TasksList from "../../components/TasksList/TasksList";

export const UndoneView = () => {
  return (
      <div className="jol">
          <TasksList tasksType={"undone"} />
      </div>
  );
};
