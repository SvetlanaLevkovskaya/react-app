import React from "react";
// @ts-ignore
import styles from './../Friends.module.css';

const FriendItem = (props: any) => {
  return <div className={styles.friends}>{props.name}</div>;
};

export default FriendItem;