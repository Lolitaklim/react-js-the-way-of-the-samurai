const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

const initialState = {
  users: [
    // {
    //   id: 2,
    //   photoUrl: 'https://avatars.githubusercontent.com/u/115589478?v=4',
    //   followed: true,
    //   fullName: 'жабне',
    //   status: 'супер статус',
    //   location: { city: 'Moscow', country: 'Russia' },
    // },
    // {
    //   id: 3,
    //   photoUrl: 'https://avatars.githubusercontent.com/u/115589478?v=4',
    //   followed: false,
    //   fullName: 'квакша',
    //   status: 'квакный статус',
    //   location: { city: 'Tbilisi', country: 'Georgia' },
    // },
    // {
    //   id: 4,
    //   photoUrl: 'https://avatars.githubusercontent.com/u/115589478?v=4',
    //   followed: true,
    //   fullName: 'лягуа',
    //   status: 'думаю о высоком',
    //   location: { city: 'Minsk', country: 'Belarus' },
    // },
  ],
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true }
          }
          return u
        }),
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false }
          }
          return u
        }),
      }
    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users],
      }
    default:
      return state
  }
}

export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unFollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })

export default usersReducer
