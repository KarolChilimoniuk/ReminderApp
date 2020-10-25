import React from "react";
import TasksList from "../../components/TasksList/TasksList";
import styles from "./HomeView.module.css";

export const Home = () => {
  return (
    <div className={styles.home_view}>
      <TasksList tasksType={"all"} />
    </div>
  );
};
