import React, { Component } from "react";
import MyPosts from "./MyPosts/MyPosts";
import styles from "./Profile.module.css"
import profile from "./profile.jpg"

class Profile extends Component {
  render() {
  return (
      <div>
        <div>
          <img src={profile} className={styles.profile} alt="profile" />
        </div>
        <div>
          {" "}
          avatar + desc
          {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRY2YhMsJluE4eJFwPBIZu9k12vyBc7mRrnw&usqp=CAU" /> */}
        </div>
        <MyPosts />
      </div>
   );
  }  
}

export default Profile;