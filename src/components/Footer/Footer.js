import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.footer__paragraph}>By Karol Chilimoniuk</p>
      <p className={styles.footer__paragraph}>
        webdevkarolchilimoniuk@gmail.com
      </p>
    </footer>
  );
};

export default Footer;
