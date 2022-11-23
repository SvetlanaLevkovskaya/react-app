import React from "react"
import styles from "./Dialogs.module.css"

const Dialogs = (props) => {
    return (
        <div className={styles.dialogs}>
          <div className={styles.dialogsItems + " " + styles.active}>
            <div className={styles.dialog}>
              Sveta
            </div>
            <div className={styles.dialog}>
              Viktor
            </div>
            <div className={styles.dialog}>
              Vadim
            </div>
            <div className={styles.dialog}>
              Andrey
            </div>
            <div className={styles.dialog}>
              Gleb
            </div>
            <div className={styles.dialog}>
              Sasha
            </div>
          </div>
          <div className={styles.messages}>
            <div className={styles.message}>Hello</div>
            <div className={styles.message}>Hi</div>
            <div className={styles.message}>How are you?</div>
          </div>
        </div>
    )
}

export default Dialogs
