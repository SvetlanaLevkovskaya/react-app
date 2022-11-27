import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postElements = props.posts.map((post) => (
    <Post message={post.message} likecount={post.likeCount} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch({ type: "ADD-POST" });
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    const action = { type: "UPDATE-NEW-POST-TEXT", newText: text };
    props.dispatch(action);
  };

  return (
    <div className={styles.postsBlock}>
      <h3>My Posts</h3>

      <div>
        <textarea
          onChange={onPostChange}
          className={styles.textarea}
          ref={newPostElement}
          value={props.newPostText}
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
