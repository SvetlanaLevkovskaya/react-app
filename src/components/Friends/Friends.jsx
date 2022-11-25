import React from "react";
import styles from "./Friends.module.css"
import FriendItem from "./FriendItem/FriendItem";

const Friends = (props) => {
 
  let friendElements = props.state.friends.map((f) => (
    <FriendItem name={f.name} id={f.id} />
  ));

 
  return (
    <div className={styles.friends}>
      <div className={styles.friend}> { friendElements }</div>
     
    </div>
  );
};


export default Friends;
