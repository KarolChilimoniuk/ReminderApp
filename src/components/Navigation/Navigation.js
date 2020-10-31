import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = ({ mobileNav }) => {
  return (
    <nav
      className={
        mobileNav === "default" ? styles.navigation : styles.activeMobile
      }
    >
      <ul className={styles.list}>
        <li className={styles.list_element}>
          <Link to="/" className={styles.list_link}>
            Home
          </Link>
        </li>
        <li className={styles.list_element}>
          <Link to="/done" className={styles.list_link}>
            Done
          </Link>
        </li>
        <li className={styles.list_element}>
          <Link to="/undone" className={styles.list_link}>
            Undone
          </Link>
        </li>
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  mobileNav: PropTypes.string,
};
export default Navigation;
