import ReactDOM from 'react-dom/client'
import './index.css'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
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
  }]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <LoginContextProvider>
      <Navigation />
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-2 border'>
            <SideNav />
          </div>
          <div className='col-10 border'>
            <div id="bgWeb" className=' border'>
              <RouterProvider router={router} />
            </div>
          </div>
        </div>
      </div>



    </LoginContextProvider>
  </>
)
