import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

axios.defaults.baseURL = 'http://localhost:5000'

function App() {
  const [backendData, setBackendData] = useState([])

  useEffect(() => {
    axios.get('/api').then((response) => setBackendData(response.data.users)).catch((error) => console.log(error))
  }, [])
  return (
    <div className='users'>
      {
        backendData.map((user, index) => (
          <h1 key={index}>{user}</h1>
        ))
      }
    </div>
  )
}

export default App