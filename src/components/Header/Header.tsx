import React from "react";
// @ts-ignore
import styles from "./Header.module.css";

type PropsType = {}

const Header: React.FC<PropsType> = () => {
  return (
    <header className={styles.header}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIxufZvAWIAv2XQurZUFIGGeVJ11YwY-PKeg&usqp=CAU"
        alt="img"
      ></img>
    </header>
  );
};

export default Header;
