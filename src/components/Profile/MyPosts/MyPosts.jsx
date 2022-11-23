import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  let postData = [
    { id: 1, message: "Hi, how are you?", likeCount: "15" },
    { id: 2, message: "Hi, it's so awesome!", likeCount: "8" },
  ];

  return (
    <div className={styles.postsBlock}>
      <h3>My Posts</h3>

      <div>
        <div>
          <textarea></textarea>
        </div>
        <div className={styles.button}>
          <button className={styles.btn}>Add post</button>
        </div>
      </div>

      <div className={styles.posts}>
        <Post message={postData[0].message} likecount={postData[0].likeCount} />
        <Post message={postData[1].message} likecount={postData[1].likeCount} />
      </div>
    </div>
  );
};

export default MyPosts;
