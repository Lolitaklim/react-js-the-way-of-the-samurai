import s from './ProfileInfo.module.css'
const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://ilim24.ru/articles/img/181.jpg" alt="img" />
      </div>
      <div className={s.description}>ava desc</div>
    </div>
  )
}

export default ProfileInfo
