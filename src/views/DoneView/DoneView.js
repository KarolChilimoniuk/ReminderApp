import React from "react";
import TasksList from "../../components/TasksList/TasksList";
import {Helmet} from "react-helmet-async";
import styles from "./DoneView.module.css";

export const DoneView = () => {
  return (
    <>
      <Helmet>
        <title>Reminder app</title>
        <meta
          name='description'
          content='Reminder app coded by Karol Chilimoniuk with React and other technologies'
        />
        <link rel='canonical' href='/' />
      </Helmet>
      <section className={styles.done_view}>
        <TasksList tasksType={"done"} />
      </section>
    </>
  );
};
