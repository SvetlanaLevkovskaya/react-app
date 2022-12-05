const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const profileReducer = (state: any, action: any) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: "7",
        message: state.newPostText,
        likeCount: "0",
      };
      state.posts.push(newPost);
      state.newPostText = "";
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
};

export type AddPostActionType = {
  type: typeof ADD_POST
}
export const addPostActionCreator = (): AddPostActionType => ({ type: ADD_POST });

export type UpdateNewPostActionType = {
  type: typeof UPDATE_NEW_POST_TEXT,
  newText: string
}

export const updataNewPostTextActionCreator = (text: string): UpdateNewPostActionType => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export default profileReducer;
