import './App.css'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import Profile from './components/Profile/Profile'
import { Route, Routes } from 'react-router-dom'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import UsersContainer from './components/Users/UsersContainer'

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />

      <div className="app-wrapper-content">
        <Routes>
          <Route element={<DialogsContainer />} path="/dialogs" />
          <Route element={<Profile />} path="/profile" />

          <Route element={<UsersContainer />} path="/users" />
        </Routes>
      </div>
    </div>
  )
}

export default App
