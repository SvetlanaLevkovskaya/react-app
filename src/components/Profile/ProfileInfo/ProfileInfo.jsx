import React, { Component } from "react";
import styles from "./ProfileInfo.module.css";
import profile from "./profile.jpg";

class ProfileInfo extends Component {
  render() {
    return (
      <div>
        <div>
          <img src={profile} className={styles.profileInfo} alt="profile" />
        </div>
        <div className={styles.descriptionBlock}>
          avatar + desc
          {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRY2YhMsJluE4eJFwPBIZu9k12vyBc7mRrnw&usqp=CAU" /> */}
        </div>
      </div>
    );
  }
}

export default ProfileInfo;
