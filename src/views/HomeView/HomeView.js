import React from "react";
import TasksList from "../../components/TasksList/TasksList";
import styles from "./HomeView.module.css";

export const Home = () => {
  return (
    <>
      <section className={styles.homeView}>
        <TasksList tasksType={"all"} />
      </section>
    </>
  );
};
