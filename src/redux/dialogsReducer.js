const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

const initialState = {
  dialogs: [
    { id: 1, name: 'lolit' },
    { id: 2, name: 'pupsik' },
    { id: 3, name: 'shrexy' },
    { id: 4, name: 'pepsi' },
  ],
  messages: [
    { id: 1, message: 'hi' },
    { id: 2, message: 'hawau' },
    { id: 3, message: 'bll' },
    { id: 4, message: 'cola my fav napitok' },
  ],
  newMessageBody: '',
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body,
      }
    case SEND_MESSAGE:
      let body = state.newMessageBody
      return {
        ...state,
        newMessageBody: '',
        messages: [...state.messages, { id: 6, message: body }],
      }
    default:
      return state
  }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })

export const updateNewMessageBodyCreator = (body) => {
  return { type: UPDATE_NEW_MESSAGE_BODY, body: body }
}

export default dialogsReducer
