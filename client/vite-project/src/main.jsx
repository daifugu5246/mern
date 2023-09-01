import React, {createContext, useContext }from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import {LoginContextProvider} from './context/loginContext'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
    /*Remain Task: if not login can not go to home */
  },
  {
    path:'/home/:username',
    element: <Home />,
  },
  {
    path:'/register',
    element: <Register />,
  }]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <LoginContextProvider>
      <RouterProvider router={router}/>
    </LoginContextProvider>
  </>
)
