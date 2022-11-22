//import React from "react";
import MyPosts from "./MyPosts/MyPosts";
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
        <MyPosts />
      </div>
    
}

export default Profile;