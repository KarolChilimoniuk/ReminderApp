import React from "react";
import TasksList from "../../components/TasksList/TasksList";

export const Home = () => {
  return (
    <div className="jol">
      <TasksList tasksType={"all"} />
    </div>
  );
};


