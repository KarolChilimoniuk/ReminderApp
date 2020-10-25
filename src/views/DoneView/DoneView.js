import React from "react";
import TasksList from "../../components/TasksList/TasksList";
import styles from "./DoneView.module.css";

export const DoneView = () => {
  return (
    <div className={styles.done_view}>
      <TasksList tasksType={"done"} />
    </div>
  );
};
