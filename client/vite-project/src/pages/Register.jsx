import {React,useState,useEffect} from 'react'
import {Helmet} from 'react-helmet'
import axios from 'axios'


axios.defaults.baseURL = 'http://localhost:5000'

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [c_password, setC_password] = useState('');
    const [confirmError, setConfirmError] = useState('');

    const passwordConfirm = () => {
        if (c_password !== '' && password !== c_password){
            return false
        }else{
            return true
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('/register', {
            username: username,
            password: password,
        }).then((response) => {
            console.log(response.data)
        }).catch((error) => {
            console.error(error)
        })
        setUsername('')
        setPassword('')
        setC_password('')
    }
    useEffect(() => {
        if (passwordConfirm() === false){
            setConfirmError('*Password does not match')
        }else{
            setConfirmError('')
        }
    },[password, c_password])
    return (
        <>
            <Helmet>
                <title>Register | YourColor</title>
            </Helmet>
            <h1>Register Page</h1>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Registration Form</legend>
                    <label htmlFor='username'>Username:</label>
                    <input type='text' id='username' value={username} onChange={(e) => setUsername(e.target.value)} required/>
                    <label htmlFor='password'>Password:</label>
                    <input type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} required/>
                    <label htmlFor='c_password'>Confirm Password:</label>
                    <input type='password' id='c_password' name='c_password' value={c_password} onChange={(e) => setC_password(e.target.value)} required/>
                    <span style={{color:'red'}}>{confirmError}</span>
                    <button type='submit' id='register'>Register</button>
                    <a href="/">Back to login</a>
                </fieldset>
            </form>
        </>
    );
};
 
export default Register;
