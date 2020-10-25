import React from "react";
import TasksList from "../../components/TasksList/TasksList";
import styles from "./UndoneView.module.css";

export const UndoneView = () => {
  return (
    <div className={styles.undone_view}>
      <TasksList tasksType={"undone"} />
    </div>
  );
};
