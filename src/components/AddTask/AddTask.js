import React from "react";
import addIcon from "../../images/icons/add.svg";
import styles from "./AddTask.module.css";

const AddTask = ({ onClickHandler }) => {
  return (
    <>
      <img
        className={styles.add_icon}
        src={addIcon}
        alt="plus"
        onClick={onClickHandler}
      />
    </>
  );
};

export default AddTask;
