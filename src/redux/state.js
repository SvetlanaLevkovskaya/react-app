import dialogReducer from "./dialogReduser";
import profileReducer from "./profileReduser";
import navbarReducer from "./navbarReduser";

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
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
    this._state.navBar = navbarReducer(this._state.navBar, action);
    this._callSubscriber(this._state);
  },
};

export default store;


