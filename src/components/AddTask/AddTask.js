import React from "react";
import addIcon from "../../images/icons/add.png";

const AddTask = ({ onClickHandler }) => {
  return (
    <>
      <img src={addIcon} alt="plus" onClick={onClickHandler} />
    </>
  );
};

export default AddTask;
