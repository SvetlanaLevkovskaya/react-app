const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const ADD_MESSAGE = "SEND_MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", likeCount: "15" },
        { id: 2, message: "Hi, it's so awesome!", likeCount: "8" },
      ],
      newPostText: "",
    },

    dialogsPage: {
      dialogs: [
        { id: "1", name: "Sveta" },
        { id: "2", name: "Viktor" },
        { id: "3", name: "Vadim" },
        { id: "4", name: "Andrey" },
        { id: "5", name: "Gleb" },
        { id: "6", name: "Sasha" },
      ],
      messages: [
        { id: "1", message: "Hello  😀" },
        { id: "2", message: "Hi 🥳" },
        { id: "3", message: "How are you? 🧑‍🚀" },
        { id: "4", message: "Yo 🤩" },
        { id: "5", message: "Sound great! 😉" },
        { id: "6", message: "That's right! 💯" },
      ],
      newMessageBody: "",
    },

    navBar: {
      friends: [
        { id: 1, name: "Viktor" },
        { id: 2, name: "Sasha" },
        { id: 3, name: "Gleb" },
      ],
    },
  },

  _callSubscriber() {},

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
    window.state = store;
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: "7",
        message: this._state.profilePage.newPostText,
        likeCount: "0",
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.dialogsPage.newMessageBody = action.body;
      this._callSubscriber(this._state);
    } else if (action.type === ADD_MESSAGE) {
      let body = this._state.dialogsPage.newMessageBody;
      this._state.dialogsPage.newMessageBody = "";
      this._state.dialogsPage.messages.push({ id: 6, message: body });
      this._callSubscriber(this._state);
    }
  },
};
export const addPostActionCreator = () => ({ type: ADD_POST });
export const updataNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const updataNewMessageTextActionCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});

export default store;
