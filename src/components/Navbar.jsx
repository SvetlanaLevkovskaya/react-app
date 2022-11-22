import React from "react";
import styles from "./Navbar.module.css"
console.log(styles);
const Navbar = () => {

return <nav className={styles.nav}>
        <div >
          <a href="#s" className={styles.item}>Profile</a>
        </div>
        <div >
          <a href="#s" className={`${styles.item} ${styles.active}`}>Messages</a>
        </div>
        <div>
          <a href="#s" className={styles.item}>News</a>
        </div>
        <div>
          <a href="#s" className={styles.item}>Music</a>
        </div>
        <div>
          <a href="#s" className={styles.item}>Settings</a>
        </div>
      </nav>
}

export default Navbar;