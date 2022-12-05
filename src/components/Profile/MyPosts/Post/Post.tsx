import React, {Component} from "react";
// @ts-ignore
import styles from "./Post.module.css";
// @ts-ignore
import post from "./post.png";


type PropsType = {
  id: number
  message: string
  likeCount: string
}

class Post extends Component<PropsType> {

  render() {
    return (
        <div className={styles.items}>
          <img src={post} className={styles.post} alt="post" />
          {this.props.message}
          <div>
            <span>like</span> {this.props.likeCount}
          </div>
        </div>
    );
  }
}

export default Post;
