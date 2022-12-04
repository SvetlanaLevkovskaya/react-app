const ADD_MESSAGE = "ADD_MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";

const dialogReducer = (state: any, action: any) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
    case ADD_MESSAGE:
      let body = state.newMessageBody;
      state.newMessageBody = "";
      state.messages.push({ id: 6, message: body });
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
