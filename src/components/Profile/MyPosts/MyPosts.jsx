//import React from "react";
//import styles from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {
  return <div>
          {" "}
          <textarea></textarea>
          <button>Add post</button>
          <div> New post</div>
          <div>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          </div>
        </div>
          
}

export default MyPosts;