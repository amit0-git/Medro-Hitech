import React from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/logo.png";
import ButtonImg from "../../assets/Button.svg";

function Navbar() {
  return (
    <nav className={styles.nav}>
      
      <img src={logo} alt="Logo" className={styles.logo} />
      <ul className={styles.list}>
        <li className={styles.item}>Courses</li>
        <li className={styles.item}>College Training</li>
        <li className={styles.item}>Corporate Training</li>
        <li className={styles.item}>Study Abroad</li>
        <li className={styles.item}>Ebooks</li>
        <li className={styles.item}>Blogs</li>
        <li className={styles.item}>Contact Us</li>
      </ul>
        <img src={ButtonImg} alt="Button" className={styles.button} />
    </nav>
  );
}

export default Navbar;
