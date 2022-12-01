import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updataNewMessageTextActionCreator,} from "../../redux/dialogReduser";


const Dialogs = (props) => {
  let state = props.store.getState().dialogsPage;

  let dialogsElements = state.dialogs.map((d) => (
      <DialogItem name={d.name} id={d.id}/>
  ));
  let messagesElements = state.messages.map((m) => (
      <Message message={m.message}/>
  ));
  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.store.dispatch(addMessageActionCreator());
  };

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.store.dispatch(updataNewMessageTextActionCreator(body));
  };

  return (
      <div className={styles.dialogs}>
        <div className={styles.dialogsItems}>{dialogsElements}</div>
        <div className={styles.messages}>
          <div>{messagesElements}</div>
          <div className={styles.addMessage}>
            <div>
            <textarea
                className={styles.textarea}
                value={newMessageBody}
                onChange={onNewMessageChange}
                placeholder="Enter your message"
            />
            </div>
            <div>
              <button className={styles.btn} onClick={onSendMessageClick}>
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Dialogs;
