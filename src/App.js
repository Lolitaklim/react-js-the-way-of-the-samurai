import './App.css'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />

        <div className="app-wrapper-content">
          <Routes>
            <Route element={<Profile />} path="/profile" />
            <Route element={<Dialogs />} path="/dialogs" />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
