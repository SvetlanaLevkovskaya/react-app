import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIxufZvAWIAv2XQurZUFIGGeVJ11YwY-PKeg&usqp=CAU"></img>
      </header>
      <nav className="nav">
        <div>
          <a href="#s">Profile</a>
        </div>
        <div>
          <a href="#s">Messages</a>
        </div>
        <div>
          <a href="#s">News</a>
        </div>
        <div>
          <a href="#s">Music</a>
        </div>
        <div>
          <a href="#s">Settings</a>
        </div>
      </nav>
      <div className="content">
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRg_0jG33ShEMVfbTNe3r7yWUDxyrw__BGxg&usqp=CAU"/>
        </div>
        <div>
          {" "}
          avatar + desc
          {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRY2YhMsJluE4eJFwPBIZu9k12vyBc7mRrnw&usqp=CAU" /> */}
        </div>
        <div>
          {" "}
          My posts
          <div> New post</div>
          <div> Post 1</div>
          <div> Post 2</div>
        </div>
      </div>
    </div>
  );
};

export default App;
