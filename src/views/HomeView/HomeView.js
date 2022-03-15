import React from "react";
import TasksList from "../../components/TasksList/TasksList";
import {Helmet} from "react-helmet-async";
import styles from "./HomeView.module.css";

export const Home = () => {
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
      <section className={styles.home_view}>
        <TasksList tasksType={"all"} />
      </section>
    </>
  );
};
