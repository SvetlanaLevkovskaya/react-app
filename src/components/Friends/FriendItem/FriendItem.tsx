import React from "react";
// @ts-ignore
import styles from './../Friends.module.css';

type PropsType = {
  id: number
  name: string
}

const FriendItem: React.FC<PropsType> = (props) => {
  return <div className={styles.friends}>{props.name}</div>;
};

export default FriendItem;