import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import addIcon from "../../images/icons/add2.png";
import styles from "./AddTask.module.css";

const AddTask = ({ onClickHandler }) => {
  const history = useHistory();

  return (
    <>
      <img
        className={styles.add__icon}
        src={addIcon}
        alt="plus"
        onClick={() => {
          history.push("/");
          onClickHandler();
        }}
      />
    </>
  );
};

AddTask.propTypes = {
  onClickHandler: PropTypes.func,
};

export default AddTask;
