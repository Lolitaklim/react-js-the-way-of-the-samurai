// import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'
import Dialog from './Dialog/Dialog'
import Message from './Message/Message'
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from '../../redux/dialogsReducer'

const Dialogs = (props) => {
  // let state = props.store.getState().dialogsPage
  let state = props.dialogsPage
  let newMessageBody = state.newMessageBody

  let onSendMessageClick = () => {
    props.sendMessage()
    // props.store.dispatch(sendMessageCreator())
  }

  let onNewMessageChange = (e) => {
    let body = e.target.value
    props.updateNewMessageBody(body)
    // props.store.dispatch(updateNewMessageBodyCreator(body))
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>
        {state.dialogs.map((dialog) => (
          <Dialog name={dialog.name} id={dialog.id} />
        ))}
      </div>
      <div className={s.messages}>
        <div>
          {state.messages.map((m) => (
            <Message message={m.message} id={m.id} />
          ))}
        </div>
        <div>
          <textarea
            onChange={onNewMessageChange}
            value={newMessageBody}
            placeholder="Type your message here"
          />
        </div>
        <div>
          <button onClick={onSendMessageClick}>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Dialogs
