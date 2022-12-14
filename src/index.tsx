import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/redux-store";
import {StateType} from "./types/types";

//const root = ReactDOM.createRoot(document.getElementById("root")!);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement
);

let rerenderEntireTree = (state: StateType) => {

  root.render(<React.StrictMode>
    <BrowserRouter>
      <App
          state={state}
          dispatch={store.dispatch.bind(store)}
          store={store}
      />
    </BrowserRouter>
  </React.StrictMode>);
};

rerenderEntireTree(store.getState());

store.subscribe(() =>{
  let state = store.getState()
  rerenderEntireTree(state);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
