import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
 

  let dialogElements = props.state.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

 

  let messageElements = props.state.messages.map((m) => (
    <Message message={m.message}></Message>
  ));

  return (
    <div className={styles.dialogs}>
      <div classname={styles.dialogItems}> { dialogElements }</div>
      <div classname={styles.messages}> { messageElements }</div>
    </div>
  );
};

export default Dialogs;
