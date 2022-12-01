import React from "react";
import styles from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const Navbar = () => {

  let linkStyle = ({isActive}) => ({color: isActive ? 'darkred' : 'white'})

  return (<nav className={styles.nav}>
    <div className={styles.item}>
      <NavLink to="/profile" style={linkStyle}>
        Profile
      </NavLink>
    </div>
    <div className={styles.item}>
      <NavLink to="/dialogs" style={linkStyle}>
        Dialogs
      </NavLink>
    </div>
    <div className={styles.item}>
      <NavLink to="/news" style={linkStyle}>
        News
      </NavLink>
    </div>
    <div className={styles.item}>
      <NavLink to="/music" style={linkStyle}>
        Music
      </NavLink>
    </div>
    <div className={styles.item}>
      <NavLink to="/settings" style={linkStyle}>
        Settings
      </NavLink>
    </div>
    <div className={styles.itemFriends}>
      <NavLink to="/friends" style={linkStyle}>
        Friends
      </NavLink>
      <div className={styles.container}>
        <div>
          <svg viewBox="0 0 80 80" width="50" height="50">
            <circle className={styles.circle} cx="40" cy="40" r="38"/>
          </svg>

          <svg viewBox="0 0 80 80" width="50" height="50">
            <circle className={styles.circle} cx="40" cy="40" r="38"/>
          </svg>

          <svg viewBox="0 0 80 80" width="50" height="50">
            <circle className={styles.circle} cx="40" cy="40" r="38"/>
          </svg>
        </div>

        <div className={styles.friends}>
          <span className={styles.friend}>Viktor </span>
          <span className={styles.friend}>Sasha </span>
          <span className={styles.friend}>Gleb</span>
        </div>
      </div>
    </div>
  </nav>);
};

export default Navbar;
