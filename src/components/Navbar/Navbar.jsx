import { NavLink } from 'react-router-dom'
import s from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${s.navlink} ${s.active}` : s.navlink
          }
          to="/profile"
        >
          Profile
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${s.navlink} ${s.active}` : s.navlink
          }
          to="/dialogs"
        >
          Messages
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${s.navlink} ${s.active}` : s.navlink
          }
          to="/news"
        >
          News
        </NavLink>
      </div>
      <div className={s.item}>
        <a>Music</a>
      </div>
      <div className={s.item}>
        <a>Settings</a>
      </div>
    </nav>
  )
}

export default Navbar
