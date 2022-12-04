import React from "react";
// @ts-ignore
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import { addPostActionCreator, updataNewPostTextActionCreator } from "../../../redux/profileReduser";


const MyPosts = (props: any) => {

  let postElements = props.posts.map((post: {message: string, likeCount: string }) => (
    <Post message={post.message} likecount={post.likeCount} />
  ));

  let newPostElement = React.createRef<HTMLTextAreaElement>();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    if (newPostElement.current != null) {
      let text = newPostElement.current.value;
      const action = updataNewPostTextActionCreator(text);
      props.dispatch(action);
    }
  };

  return (
    <div className={styles.postsBlock}>
      <h3>My Posts</h3>

      <div>
        <textarea
          className={styles.textarea}
          ref={newPostElement}
          value={props.newPostText}
          onChange={onPostChange}
        />
        <button onClick={addPost} className={styles.btn}>
          Add post
        </button>
      </div>

      <div className={styles.posts}>{postElements}</div>
    </div>
  );
};

export default MyPosts;
