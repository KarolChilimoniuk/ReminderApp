import React from "react";
import { NavLink, Link } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = ({ mobileNav }) => {
  return (
    <nav
      class={mobileNav === "default" ? styles.navigation : styles.activeMobile}
    >
      <ul class={styles.list}>
        <li class={styles.list_element}>
          <Link to="/" class={styles.list_link}>
            Home
          </Link>
        </li>
        <li class={styles.list_element}>
          <Link to="/done" class={styles.list_link}>
            Done
          </Link>
        </li>
        <li class={styles.list_element}>
          <Link to="/undone" class={styles.list_link}>
            Undone
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
