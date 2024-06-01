const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

const initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body
      return state
    case SEND_MESSAGE:
      let body = state.newMessageBody
      state.newMessageBody = ''
      state.messages.push({ id: 6, message: body })
      return state
    default:
      return state
  }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })

export const updateNewMessageBodyCreator = (body) => {
  return { type: UPDATE_NEW_MESSAGE_BODY, body: body }
}

export default dialogsReducer
