import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.paragraph}>By Karol Chilimoniuk</p>
      <p className={styles.paragraph}>webdevkarolchilimoniuk@gmail.com</p>
    </footer>
  );
};

export default Footer;
