import { DialogType, MessageType } from "../types/types";
//import {InitialStateType} from "./profileReduser";

const ADD_MESSAGE = "ADD_MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";

let initialState = {
  dialogs: [
    {id: "1", name: "Sveta"},
    {id: "2", name: "Viktor"},
    {id: "3", name: "Vadim"},
    {id: "4", name: "Andrey"},
    {id: "5", name: "Gleb"},
    {id: "6", name: "Sasha"},
  ] as Array<DialogType>,
  messages: [
    {id: "1", message: "Hello  😀"},
    {id: "2", message: "Hi 🥳"},
    {id: "3", message: "How are you? 🧑‍🚀"},
    {id: "4", message: "Yo 🤩"},
    {id: "5", message: "Sound great! 😉"},
    {id: "6", message: "That's right! 💯"},
  ] as Array<MessageType>,
  newMessageBody: "" as string,
}

const dialogReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
    case ADD_MESSAGE:
      let body = state.newMessageBody;
      state.newMessageBody = "";
      state.messages.push({ id: "6", message: body });
      return state;
    default:
      return state;
  }
};

type AddMessageActionType = {
  type: typeof ADD_MESSAGE
}

export const addMessageActionCreator = (): AddMessageActionType => ({ type: ADD_MESSAGE });

type UpdateNewMessageActionType = {
  type: typeof UPDATE_NEW_MESSAGE_BODY,
  body: string
}

export const updataNewMessageBodyActionCreator = (body: string): UpdateNewMessageActionType => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});

export default dialogReducer;
export type InitialStateType = typeof initialState;