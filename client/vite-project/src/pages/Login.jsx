/*import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLoginContext } from '../context/loginContext'
import { Helmet } from 'react-helmet'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:5000'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [setErrorText] = useState('')
    const { login } = useLoginContext()
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('/login', {
            username: username,
            password: password,
        }).then((response) => {
            console.log(response.status)
            if (response.status === 200) {
                console.log(response.data.uid, response.data.username, response.data.name, response.data.leaf, response.data.peach)
                login(response.data.uid, response.data.username, response.data.name, response.data.leaf, response.data.peach)
                navigate('/auction');
            }
            else {
                setErrorText(response.data)
            }
        }).catch((error) => {
            console.error(error)
        })
        setUsername('')
        setPassword('')
    }
    return (
        <>

        </>
    )
}
/**            <Helmet>
                <title>Login | YourColor</title>
            </Helmet>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Login Form</legend>
                    <span>{errorText}</span>
                    <label htmlFor='username'>Username:</label>
                    <input type='text' id='username' value={username} onChange={(e) => setUsername(e.target.value)} required />
                    <label htmlFor='password'>Password:</label>
                    <input type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <button type='submit' id='login'>Login</button>
                    <a href='/register'>Don't have account?</a>
                </fieldset>
            </form> */
export default function Login() {
    return (
        <></>
    )
}