import React from "react";
// @ts-ignore
import styles from "./MessageItem.module.css";

const MessageItem = (props: any) => {
  return <div className={styles.messages}>{props.message}</div>
};

export default MessageItem;
