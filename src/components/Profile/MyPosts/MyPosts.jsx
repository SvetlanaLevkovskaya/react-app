import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postElements = props.posts.map((post) => (
    <Post message={post.message} likecount={post.likeCount} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
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
        <button className={styles.btn} onClick={addPost}>
          Add post
        </button>
      </div>

      <div className={styles.posts}>{postElements}</div>
    </div>
  );
};

export default MyPosts;
