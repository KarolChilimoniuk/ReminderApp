import React from "react";
import TasksList from "../../components/TasksList/TasksList";
import {Helmet} from "react-helmet-async";
import styles from "./UndoneView.module.css";

export const UndoneView = () => {
  return ( 
    <>
      <Helmet>
        <title>Reminder app</title>
        <meta
          name='description'
          content='Reminder app coded by Karol Chilimoniuk with React and other technologies'
        />
        <link rel='canonical' href='/undone' />
      </Helmet>
      <section className={styles.undone_view}>
        <TasksList tasksType={"undone"} />
      </section>
    </>
  );
};
