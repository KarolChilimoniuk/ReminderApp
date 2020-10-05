import React from "react";
import TasksList from "../../components/TasksList/TasksList";

const Home = ({ allTasks }) => {
  return (
    <div>
      <TasksList allTasks={allTasks} tasksType={"all"} />
    </div>
  );
};

export default Home;
