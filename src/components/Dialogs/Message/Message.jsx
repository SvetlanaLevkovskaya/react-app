import React from "react";
import styles from "./Message.module.css";

const Message = (props) => {
  return <div className={styles.messages}>{props.message}</div>;
};

export default Message;
