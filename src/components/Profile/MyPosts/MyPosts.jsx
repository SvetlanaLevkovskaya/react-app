import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postElements = props.posts.map((post) => (
    <Post message={post.message} likecount={post.likeCount} />
  ));

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

      <div className={styles.posts}>{postElements}</div>
    </div>
  );
};

export default MyPosts;
