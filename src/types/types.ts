export type PostType = {
  id: number
  message: string
  likeCount: string
}

export type DialogType = {
  id: string
  name: string
}
export type MessageType = {
  id: string
  message: string
}

export type FriendType = {
  id: number
  name: string
}

export type DialogsPageType = {
  dialogs: Array<DialogType>
  messages: Array<MessageType>
  newMessageBody: string
}

export type ProfilePageType = {
  posts: Array<PostType>
  newPostText: string
}

export type NavBarType = {
  friends: Array<FriendType>
}

export type StateType = {
  dialogsPage: DialogsPageType
  profilePage: ProfilePageType
  navBar: NavBarType
}

export type StoreType = {
  state: StateType
  callSubscriber: Function
  getState: Function
  subscribe: Function
  dispatch: Function
}

export type AppType = {
  dispatch: Function
  state: StateType
  store: StoreType
}