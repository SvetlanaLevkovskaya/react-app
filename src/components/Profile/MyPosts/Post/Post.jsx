import React, { Component } from "react";
import styles from "./Post.module.css"
import post from "./post.png"

class Post extends Component {
  
  render() {
    return (
        <div className={styles.items}>
          <img src={post} className={styles.Post} alt="Post" /> 
          {this.props.message}
          <div>
          <span>like {this.props.likecount}</span>
          </div>
        </div>
   );
  }       
}

export default Post;