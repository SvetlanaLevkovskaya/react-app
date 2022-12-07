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
/*let RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>*/


let store = createStore(rootReducer);

export default store;
