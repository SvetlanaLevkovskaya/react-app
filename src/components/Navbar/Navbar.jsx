import React from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.item}>
        <NavLink to="/profile" activeclassname={styles.active}>
          Profile
        </NavLink>
      </div>
      <div className={`${styles.item} ${styles.active}`}>
        <NavLink to="/dialogs" activeclassname={styles.active}>
          Dialogs
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/news" activeclassname={styles.active}>
          News
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/music" activeclassname={styles.active}>
          Music
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/settings" activeclassname={styles.active}>
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
