import React from "react";
// @ts-ignore
import styles from "./ProfileInfo.module.css";
// @ts-ignore
import profile from "./profile.jpg";

const ProfileInfo = (props: any) => {

  return (
    <div>

      <div>
        <img src={profile} className={styles.profileInfo} alt="profile" />
      </div>

      <div className={styles.descriptionBlock}>
        avatar + desc
        {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRY2YhMsJluE4eJFwPBIZu9k12vyBc7mRrnw&usqp=CAU" /> */}
      </div>

    </div>);
};

export default ProfileInfo;
