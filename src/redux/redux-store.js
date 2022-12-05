import { legacy_createStore as createStore } from "redux";
import { combineReducers } from "redux";
import profileReducer from "./profileReduser";
import dialogReducer from "./dialogReduser";
import navBarReducer from "./navBarReduser";

let rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogReducer,
  navBar: navBarReducer

})

let store = createStore(rootReducer);

export default store;
