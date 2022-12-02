import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./DialogItem.module.css";
import dialogItem from "./dialogItem.png";


const DialogItem = (props) => {

  let path = props.id;

  return (
    <div className={styles.dialog}>
        <span>
          <img src={dialogItem} className={styles.dialogItem} alt="dialogItem" />
        </span>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

export default DialogItem;
