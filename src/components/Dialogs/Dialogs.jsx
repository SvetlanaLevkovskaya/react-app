import React from "react"
import { NavLink } from "react-router-dom"
import styles from "./Dialogs.module.css"

const DialogItem = (props) => {
  let path = props.id
  return <div className={styles.dialog}>
          <NavLink to={path}>{props.name}</NavLink>                    
         </div>
}

const Message = (props) => {
  return <div className={styles.message}>{props.message}</div>
}
const Dialogs = (props) => {
    return (
        <div className={styles.dialogs}>
          <div className={styles.dialogsItems}>
            <DialogItem name="Sveta" id="1" />
            <DialogItem name="Viktor" id="2" />
            <DialogItem name="Vadim" id="3" />
            <DialogItem name="Andrey" id="4" />
            <DialogItem name="Gleb" id="5" />
            <DialogItem name="Sasha" id="6" />
 
          </div>
          <div className={styles.messages}>
            <Message message="Hello"></Message>
            <Message message="Hi"></Message>
            <Message message="How are you?"></Message>
        
          </div>
        </div>
    )
}

export default Dialogs
