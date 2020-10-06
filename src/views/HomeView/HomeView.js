import React from "react";
import TasksList from "../../components/TasksList/TasksList";

const Home = () => {
  return (
    <div>
      <TasksList tasksType={"all"} />
    </div>
  );
};

export default Home;
