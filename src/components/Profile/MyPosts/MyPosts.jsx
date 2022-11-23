import React from "react";
import styles from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {
  return <div>
          My Posts

          <div>
          <textarea></textarea>
          <button>Add post</button>
          </div>

          <div className={styles.posts}> 
          <Post message="Hi, how are you?" likecount="15"/>
          <Post message="Hi, it's so awesome!" likecount="8"/>
          </div>

        </div>
          
}

export default MyPosts;
