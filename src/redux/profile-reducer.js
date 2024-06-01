const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

const initialState = {
  posts: [
    { id: 1, message: 'hi haw a y', likesCount: 12 },
    { id: 2, message: 'its my first post', likesCount: 8 },
    { id: 3, message: 'its my second post', likesCount: 8 },
  ],
  newPostText: 'zdarova zaebal',
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      }
      state.posts.push(newPost)
      state.newPostText = ''
      return state
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText
      return state
    default:
      return state
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST })

export const updateNewPostActionCreator = (text) => {
  return { type: UPDATE_NEW_POST_TEXT, newText: text }
}

export default profileReducer
