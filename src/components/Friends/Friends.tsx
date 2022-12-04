import React from "react";
// @ts-ignore
import styles from "./Friends.module.css";
import FriendItem from "./FriendItem/FriendItem";


/*type FriendsProps = {
  id: number,
  name: string
}*/

const Friends = (props: any)  => {

  let friendElements = props.state.friends.map((f: any) => (<FriendItem name={f.name} id={f.id} />));


  return (<div className={styles.friends}>
    <div className={styles.friend}> {friendElements}</div>
  </div>);
};


export default Friends;
