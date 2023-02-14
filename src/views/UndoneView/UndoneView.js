import React from "react";
import TasksList from "../../components/TasksList/TasksList";
import styles from "./UndoneView.module.css";

export const UndoneView = () => {
  return (
    <>
      <section className={styles.undoneView}>
        <TasksList tasksType={"undone"} />
      </section>
    </>
  );
};
