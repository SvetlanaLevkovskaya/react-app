let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi, how are you?", likeCount: "15" },
      { id: 2, message: "Hi, it's so awesome!", likeCount: "8" },
    ],
  },

  dialogsPage: {
    messages: [
      { id: "1", message: "Hello  😀" },
      { id: "2", message: "Hi 🥳" },
      { id: "3", message: "How are you? 🧑‍🚀" },
      { id: "4", message: "Yo 🤩" },
      { id: "5", message: "Sound great! 😉" },
      { id: "6", message: "That's right! 💯" },
    ],
    dialogs: [
      { id: "1", name: "Sveta" },
      { id: "2", name: "Viktor" },
      { id: "3", name: "Vadim" },
      { id: "4", name: "Andrey" },
      { id: "5", name: "Gleb" },
      { id: "6", name: "Sasha" },
    ],
  },

  navBar: {
    friends: [
      { id: 1, name: "Viktor" },
      { id: 2, name: "Sasha" },
      { id: 3, name: "Gleb" }
    ]
  }
};

export default state;
