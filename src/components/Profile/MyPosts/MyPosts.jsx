import { useRef } from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
  const newPostElement = useRef()

  const addPost = () => {
    props.addPost()
    // props.dispatch(addPostActionCreator())
  }

  const onPostChange = () => {
    const text = newPostElement.current.value
    props.updateNewPostText(text)

    // props.dispatch(updateNewPostActionCreator(text))
  }

  return (
    <div className={s.postBlock}>
      <h3>my posts</h3>
      <div>
        <div>
          {' '}
          <textarea
            ref={newPostElement}
            value={props.newPostText}
            onChange={onPostChange}
          ></textarea>
        </div>
        <div>
          <button onClick={addPost}>add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {props.posts.map((p) => (
          <Post
            key={p.id}
            message={p.message}
            id={p.id}
            likesCount={p.likesCount}
          />
        ))}
      </div>
    </div>
  )
}

export default MyPosts
