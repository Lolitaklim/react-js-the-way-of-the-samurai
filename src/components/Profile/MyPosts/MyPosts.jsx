import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
  let postData = [
    { id: 1, message: 'hi haw a y', likesCount: 12 },
    { id: 2, message: 'its my first post', likesCount: 8 },
    { id: 3, message: 'its my second post', likesCount: 8 },
  ]

  return (
    <div className={s.postBlock}>
      <h3>my posts</h3>
      <div>
        <div>
          {' '}
          <textarea>add post</textarea>
        </div>
        <div>
          <button>add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postData.map((p) => (
          <Post message={p.message} id={p.id} likesCount={p.likesCount} />
        ))}
        {/* <Post message="hello" />
        <Post message="haw" /> */}
      </div>
    </div>
  )
}

export default MyPosts
