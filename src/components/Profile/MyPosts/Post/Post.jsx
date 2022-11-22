import React, { Component } from "react";
import styles from "./Post.module.css"
import post from "./post.png"

class Post extends Component {
  render() {
  return (
        <div className={styles.items}>
          <img src={post} className={styles.Post} alt="Post" /> 
          Post 1
          <div>
          <span>like</span>
          </div>
        </div>
   );
  }       
}

export default Post;