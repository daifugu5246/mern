import ReactDOM from 'react-dom/client'
import './index.css'

//Import pages
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Market from './pages/Market'
import Artwork from './pages/Artwork'
import Trend from './pages/Trend'

//Import navigation bar and side navigation bar
import Navigation from './navigation'
import SideNav from './sideNav'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { LoginContextProvider } from './context/loginContext'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.bundle';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
    /*Remain Task: if not login can not go to home */
  },
  {
    path: '/home/:username',
    element: <Home />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/profile',
    element: <Profile />
  },
  {
    path: '/market/purchase',
    element: <Market />
  },
  {
    path: '/market/auction',
    element: <Market />
  },
  {
    path: '/artwork',
    element: <Artwork />
  },
  {
    path: '/trend',
    element: <Trend />
  }]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <LoginContextProvider>
      <Navigation />
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-1 d-flex align-items-center'>
            <SideNav />
          </div>
          <div className='col-11 px-4 pe-5'>
            <div id="bgWeb" className='my-4 p-4'>
              <RouterProvider router={router} />
            </div>
          </div>
        </div>
      </div>
    </LoginContextProvider>
  </>
)
