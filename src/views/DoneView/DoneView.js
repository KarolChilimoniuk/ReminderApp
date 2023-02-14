import React from "react";
import TasksList from "../../components/TasksList/TasksList";
import styles from "./DoneView.module.css";

export const DoneView = () => {
  return (
    <>
      <link rel="canonical" href="/" />
      <section className={styles.doneView}>
        <TasksList tasksType={"done"} />
      </section>
    </>
  );
};
