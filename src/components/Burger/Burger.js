import React, { useState } from "react";
import { handleBurger } from "../../utils/burger";
import PropTypes from "prop-types";
import styles from "./Burger.module.css";

const Burger = ({ mobileNavStatusHandler }) => {
  let [burgerClass, handleBurgerClass] = useState(styles.burger);

  return (
    <>
      {burgerClass === styles.burger ? (
        <div
          className={styles.burger}
          onClick={() => {
            handleBurger(burgerClass, handleBurgerClass, styles);
            mobileNavStatusHandler();
          }}
        ></div>
      ) : (
        <div
          className={styles.active__Burger}
          onClick={() => {
            handleBurger(burgerClass, handleBurgerClass, styles);
            mobileNavStatusHandler();
          }}
        ></div>
      )}
    </>
  );
};

Burger.propTypes = {
  mobileNavStatusHandler: PropTypes.func,
};

export default Burger;
