import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

/*
type PropType = {
  dispatch: Function
  profilePage: {
    posts: {
      id: number
      likeCount: string
      message: string
    },
    newPostText: string
  }
}
*/

const Profile = (props: any) => {

  return (
    <div>
      <ProfileInfo />
      <MyPosts
        posts={props.profilePage.posts}
        newPostText={props.profilePage.newPostText}
        dispatch={props.dispatch}
      />
    </div>
  );
};

export default Profile;
