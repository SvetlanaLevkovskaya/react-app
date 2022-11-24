import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogs = [
    { id: "1", name: "Sveta" },
    { id: "2", name: "Viktor" },
    { id: "3", name: "Vadim" },
    { id: "4", name: "Andrey" },
    { id: "5", name: "Gleb" },
    { id: "6", name: "Sasha" },
  ];

  let dialogElements = dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let messages = [
    { id: "1", message: "Hello" },
    { id: "2", message: "Hi" },
    { id: "3", message: "How are you?" },
    { id: "4", message: "Yo" },
    { id: "5", message: "Yo" },
    { id: "6", message: "Yo" },
  ];

  let messageElements = messages.map((m) => (
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
