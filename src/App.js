import './App.css'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs'
import { Route, Routes } from 'react-router-dom'
import DialogsContainer from './components/Dialogs/DialogsContainer'

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />

      <div className="app-wrapper-content">
        <Routes>
          <Route
            element={
              <Profile
                // profilePage={props.state.profilePage}
                // dispatch={props.dispatch}
                store={props.store}
              />
            }
            path="/profile"
          />
          <Route
            element={
              <DialogsContainer
                store={props.store}
                //  state={props.state.dialogsPage}
              />
            }
            path="/dialogs"
          />
        </Routes>
      </div>
    </div>
  )
}

export default App
