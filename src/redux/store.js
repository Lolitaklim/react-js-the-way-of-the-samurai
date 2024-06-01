import dialogsReducer from './dialogsReducer'
import profileReducer from './profile-reducer'
import sidebarReducer from './sidebarReducer'

const store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'hi haw a y', likesCount: 12 },
        { id: 2, message: 'its my first post', likesCount: 8 },
        { id: 3, message: 'its my second post', likesCount: 8 },
      ],
      newPostText: 'zdarova zaebal',
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: 'lolit' },
        { id: 2, name: 'pupsik' },
        { id: 2, name: 'shrexy' },
        { id: 2, name: 'pepsi' },
      ],
      messages: [
        { id: 1, message: 'hi' },
        { id: 2, message: 'hawau' },
        { id: 2, message: 'bll' },
        { id: 2, message: 'cola my fav napitok' },
      ],
      newMessageBody: '',
    },
    // sidebar:
  },

  _callSubscriber() {},

  getState() {
    return this._state
  },

  subscribe(observer) {
    this._callSubscriber = observer
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._state.sidebar = sidebarReducer(this._state.sidebar, action)

    this._callSubscriber(this._state)
  },
}

export default store
