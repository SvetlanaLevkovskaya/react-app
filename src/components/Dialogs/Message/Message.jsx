import React from "react";
import styles from "./Message.module.css";

const Message = (props) => {
  let newMessageElement = React.createRef();

  let addMessage = () => {
    let text = newMessageElement.current.value;
    alert(text);
  };

  return (
    <div>
      <div className={styles.messages}>
        {props.message}
        <div>
          <textarea className={styles.textarea} ref={newMessageElement}></textarea>
          <button className={styles.btn} onClick={addMessage}> New message</button>
        </div>
      </div>
    </div>
  );
};

export default Message;
