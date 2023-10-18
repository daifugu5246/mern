import { useEffect } from 'react'
import axios from 'axios'
import { Route, Routes } from 'react-router-dom'

//Import pages
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Market from './pages/Market'
import Artwork from './pages/Artwork'
import Trend from './pages/Trend'
//Imported by WoraPhet
import TestLoginModal from './pages/TestLoginModal'
import AuctionDetail from './pages/AuctionDetail'

axios.defaults.baseURL = 'http://localhost:5000'

function App() {

  useEffect(() => {

  }, [])
  return (
    <div className='col-11 px-4 pe-5'>
      <div id="bgWeb" className='my-4 p-4'>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home/:username" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/purchase" element={<Market />} />
          <Route path="/auction" element={<Market />} />
          <Route path="/artwork" element={<Artwork />} />
          <Route path="/trend" element={<Trend />} />
          <Route path="/TestLoginModal" element={<TestLoginModal />} />
          <Route path="/auction/:id" element={<AuctionDetail />} />
        </Routes>
      </div>
    </div>

  )
}

export default App