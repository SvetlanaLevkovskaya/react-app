import React from "react";
import styles from "./Profile.module.css"

const Profile = () => {
  return <div className={styles.content}>
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRg_0jG33ShEMVfbTNe3r7yWUDxyrw__BGxg&usqp=CAU" alt="img"/>
        </div>
        <div>
          {" "}
          avatar + desc
          {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRY2YhMsJluE4eJFwPBIZu9k12vyBc7mRrnw&usqp=CAU" /> */}
        </div>
        <div>
          {" "}
          My posts
          <div className={styles.posts}> New post</div>
          <div className={styles.item}> Post 1</div>
          <div className={styles.item}> Post 2</div>
        </div>
      </div>
    
}

export default Profile;