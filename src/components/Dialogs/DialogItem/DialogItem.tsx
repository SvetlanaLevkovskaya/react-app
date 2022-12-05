import React from "react";
import { NavLink } from "react-router-dom";
// @ts-ignore
import styles from "./DialogItem.module.css";
// @ts-ignore
import dialogItem from "./dialogItem.png";

type PropsType = {
  id: string
  name: string
}


const DialogItem: React.FC<PropsType> = (props) => {

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
