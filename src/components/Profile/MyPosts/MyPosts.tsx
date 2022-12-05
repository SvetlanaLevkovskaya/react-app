import React from "react";
// @ts-ignore
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import {addPostActionCreator, updataNewPostTextActionCreator} from "../../../redux/profileReduser";
import {PostType} from "../../../types/types";


type MapMyPostType = {
  posts: Array<PostType>
  dispatch(any: any): void; //AddPostActionType
  newPostText: string
}

/*type DispatchType = {
  addPost: () => ({ type: ADD_POST })
  onPostChange: (text: string) => ({ type: UPDATE_NEW_POST_TEXT, newText: string })
}*/

const MyPosts: React.FC<MapMyPostType> = (props) => {

  let postElements = props.posts.map((post) => (
      <Post id={post.id} message={post.message} likeCount={post.likeCount} />
  ));

  let newPostElement = React.createRef<HTMLTextAreaElement>();

  let addPost = (values: any) => {
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
