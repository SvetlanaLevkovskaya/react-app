import {PostType} from "../types/types";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  posts: [
      {id: 1, message: "Hi, how are you?", likeCount: "15"},
      {id: 2, message: "Hi, it's so awesome!", likeCount: "8"},
  ] as Array<PostType>,
  newPostText: "it" as string,
}

const profileReducer = (state = initialState, action: any): InitialStateType  => {

  switch (action.type) {
    case ADD_POST:
      let newPost:  {id: number, message: string, likeCount: string} = {
        id: 7, message: state.newPostText, likeCount: "0",
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
export const addPostActionCreator = (): AddPostActionType => ({type: ADD_POST});

export type UpdateNewPostActionType = {
  type: typeof UPDATE_NEW_POST_TEXT, newText: string
}

export const updataNewPostTextActionCreator = (text: string): UpdateNewPostActionType => ({
  type: UPDATE_NEW_POST_TEXT, newText: text,
});

export default profileReducer;

export type InitialStateType = typeof initialState;