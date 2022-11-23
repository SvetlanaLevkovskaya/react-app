import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Dialogs.module.css";

const DialogItem = (props) => {
  let path = props.id;
  return (
    <div className={styles.dialog}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={styles.message}>{props.message}</div>;
};

const Dialogs = (props) => {
  let dialogData = [
    { id: "1", name: "Sveta"},
    { id: "2", name: "Viktor"},
    { id: "3", name: "Vadim"},
    { id: "4", name: "Andrey"},
    { id: "5", name: "Gleb"},
    { id: "6", name: "Sasha"},
  ];

  let messageData = [
    { id: 1, message: "Hello"},
    { id: 2, message: "Hi"},
    { id: 3, message: "How are you?"},
    { id: 3, message: "Yo"},
    { id: 4, message: "Yo"},
  ]
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        <DialogItem name={dialogData[0].name} id={dialogData[0].id} />
        <DialogItem name={dialogData[1].name} id={dialogData[1].id} />
   {/*      <DialogItem name="Viktor" id="2" />
        <DialogItem name="Vadim" id="3" />
        <DialogItem name="Andrey" id="4" />
        <DialogItem name="Gleb" id="5" />
        <DialogItem name="Sasha" id="6" /> */}
      </div>
      <div className={styles.messages}>
        <Message message={messageData[0].message}></Message>
        <Message message={messageData[1].message}></Message>
        <Message message={messageData[2].message}></Message>
      </div>
    </div>
  );
};

export default Dialogs;
