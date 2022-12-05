import React from "react";
// @ts-ignore
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import { addMessageActionCreator, updataNewMessageBodyActionCreator, } from "../../redux/dialogReduser";

/*type PropsType = {

}*/

const Dialogs = (props: any) => {

  let state = props.store.getState().dialogsPage;

  let dialogsElements = state.dialogs.map((d: any) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let messagesElements = state.messages.map((m: any) => (
    <MessageItem message={m.message} />
  ));
  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.store.dispatch(addMessageActionCreator());
  };

  let onNewMessageChange = (e: any) => {
    let body = e.target.value;
    props.store.dispatch(updataNewMessageBodyActionCreator(body));
  };

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogItems}>{dialogsElements}</div>
      <div className={styles.messageItems}>

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
