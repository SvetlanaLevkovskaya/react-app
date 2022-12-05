import React from "react";
// @ts-ignore
import styles from "./MessageItem.module.css";

type PropsType = {
  message: string
}

const MessageItem: React.FC<PropsType> = (props) => {
  return <div className={styles.messages}>{props.message}</div>
};

export default MessageItem;
