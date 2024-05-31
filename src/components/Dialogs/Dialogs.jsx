// import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'
import Dialog from './Dialog/Dialog'
import Message from './Message/Message'

const Dialogs = (props) => {
  let dialogsData = [
    { id: 1, name: 'lolit' },
    { id: 2, name: 'pupsik' },
    { id: 2, name: 'shrexy' },
    { id: 2, name: 'pepsi' },
  ]

  let messagesData = [
    { id: 1, message: 'hi' },
    { id: 2, message: 'hawau' },
    { id: 2, message: 'bll' },
    { id: 2, message: 'cola my fav napitok' },
  ]

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>
        {dialogsData.map((dialog) => (
          <Dialog name={dialog.name} id={dialog.id} />
        ))}
        {/* <Dialog name="lolipop" id="1" />
        <Dialog name="dimka" id="2" /> */}

        {/*
        <div className={s.dialog + ' ' + s.active}>
          */}
      </div>
      <div className={s.messages}>
        {messagesData.map((m) => (
          <Message message={m.message} id={m.id} />
        ))}
        {/* <Message Message="hi" />
        <Message message="hawau" /> */}
      </div>
    </div>
  )
}

export default Dialogs
