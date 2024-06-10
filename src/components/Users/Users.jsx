import axios from 'axios'
import s from './Users.module.css'

const Users = (props) => {
  if (props.users.length === 0) {
    axios.get('https://social-network.samuraijs.com/api/1.0')

    props.setUsers([
      {
        id: 2,
        photoUrl: 'https://avatars.githubusercontent.com/u/115589478?v=4',
        followed: true,
        fullName: 'жабне',
        status: 'супер статус',
        location: { city: 'Moscow', country: 'Russia' },
      },
      {
        id: 3,
        photoUrl: 'https://avatars.githubusercontent.com/u/115589478?v=4',
        followed: false,
        fullName: 'квакша',
        status: 'квакный статус',
        location: { city: 'Tbilisi', country: 'Georgia' },
      },
      {
        id: 4,
        photoUrl: 'https://avatars.githubusercontent.com/u/115589478?v=4',
        followed: true,
        fullName: 'лягуа',
        status: 'думаю о высоком',
        location: { city: 'Minsk', country: 'Belarus' },
      },
    ])
  }
  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img src={u.photoUrl} alt="ava" className={s.userPhoto} />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unFollow(u.id)
                  }}
                >
                  UnFollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id)
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  )
}

export default Users
