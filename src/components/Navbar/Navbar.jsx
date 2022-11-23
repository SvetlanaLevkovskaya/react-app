import React from "react";
import styles from "./Navbar.module.css"
import { Link } from "react-router-dom";

const Navbar = () => {
return <nav className={styles.nav}>
        <div >
          <Link to="/profile" className={styles.item}>Profile</Link>
        </div>
        <div >
          <Link to="/dialogs" className={`${styles.item} ${styles.active}`}>Dialogs</Link>
        </div>
        <div>
          <Link to="/news" className={styles.item}>News</Link>
        </div>
        <div>
          <Link to="/music" className={styles.item}>Music</Link>
        </div>
        <div>
          <Link to="/settings" className={styles.item}>Settings</Link>
        </div>
      </nav>
}

export default Navbar;
