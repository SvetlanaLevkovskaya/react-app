import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

let posts = [
  { id: 1, message: "Hi, how are you?", likeCount: "15" },
  { id: 2, message: "Hi, it's so awesome!", likeCount: "8" },
];

let dialogs = [
  { id: "1", name: "Sveta" },
  { id: "2", name: "Viktor" },
  { id: "3", name: "Vadim" },
  { id: "4", name: "Andrey" },
  { id: "5", name: "Gleb" },
  { id: "6", name: "Sasha" },
];

let messages = [
  { id: "1", message: "Hello" },
  { id: "2", message: "Hi" },
  { id: "3", message: "How are you?" },
  { id: "4", message: "Yo" },
  { id: "5", message: "Yo" },
  { id: "6", message: "Yo" },
];
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
