import React, { Component } from "react";
// @ts-ignore
import styles from "./Post.module.css";
// @ts-ignore
import post from "./post.png";


type PostProps = {
  message: string,
  likecount: string
}

class Post extends Component<PostProps> {

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
