import React, { Component } from "react";
import styles from "./Post.module.css";
import post from "./post.png";

class Post extends Component {

  render() {
   return (
      <div className={styles.items} >
        <img src={post} className={styles.post} alt="post" />
        {this.props.message}
        <div>
          <span>like</span> {this.props.likecount}
        </div>
      </div>
    );
  }
}

export default Post;
