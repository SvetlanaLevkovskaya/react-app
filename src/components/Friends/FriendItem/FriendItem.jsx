import React from "react";
import styles from "./../Friends.module.css";

const FriendItem = (props) => {
  return <div className={styles.friends}>{props.name}</div>;
};

export default FriendItem;