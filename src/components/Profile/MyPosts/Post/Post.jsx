import s from './Post.module.css'

const Post = (props) => {
  return (
    <div className={s.item}>
      <img
        src="https://avatars.githubusercontent.com/u/115589478?v=4"
        alt="avatar"
      />
      {props.message}
      <div>
        <span>like</span>
      </div>
    </div>
  )
}

export default Post
