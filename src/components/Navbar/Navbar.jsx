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
      <div className={styles.itemFriends}>
        <NavLink to="/friends">Friends</NavLink>
        <div className={styles.conteiner}>
          <div>
            <svg viewBox="0 0 80 80" width="50" height="50">
              <circle className={styles.circle} cx="40" cy="40" r="38" />
            </svg>

            <svg viewBox="0 0 80 80" width="50" height="50">
              <circle className={styles.circle} cx="40" cy="40" r="38" />
            </svg>

            <svg viewBox="0 0 80 80" width="50" height="50">
              <circle className={styles.circle} cx="40" cy="40" r="38" />
            </svg>
          </div>

          <div className={styles.friends}>
            <span className={styles.friend}>Viktor </span>
            <span className={styles.friend}>Sasha </span>
            <span className={styles.friend}>Gleb</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
