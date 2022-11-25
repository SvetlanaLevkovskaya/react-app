import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postElements = props.posts.map((post) => (
    <Post message={post.message} likecount={post.likeCount} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    alert(text);
  };
  return (
    <div className={styles.postsBlock}>
      <h3>My Posts</h3>

      <div>
        <textarea class={styles.textarea} ref={newPostElement}></textarea>
        <button className={styles.btn} onClick={addPost}>
          Add post
        </button>
      </div>

      <div className={styles.posts}>{postElements}</div>
    </div>
  );
};

export default MyPosts;
