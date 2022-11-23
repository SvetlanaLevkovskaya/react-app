import React from "react";
import styles from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {
  return <div className={styles.postsBlock}>
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
          <Post message="Hi, how are you?" likecount="15"/>
          <Post message="Hi, it's so awesome!" likecount="8"/>
          </div>

        </div>
          
}

export default MyPosts;
