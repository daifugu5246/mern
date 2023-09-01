import {useState, useEffect} from 'react';
import {Helmet} from 'react-helmet';
import { useNavigate, useParams } from 'react-router-dom';
import {useLoginContext} from '../context/loginContext'
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000'

const Home = () => {
    const {username} = useParams()
    const [userInfo, setUserInfo] = useState()
    const { isLoggedin, login, logout } = useLoginContext()
    const navigate = useNavigate()
    
    useEffect(() => {
        if (isLoggedin) {
            axios.get(`/home/${username}`)
            .then((response) => {
                console.log(response.data)
                setUserInfo(response.data)
            }).catch((error) => {
                console.error(error);
            })
        }else{
            navigate('/')
        }
    },[username]);

    return (
        <>
            <Helmet>
                <title>Home | YourColor</title>
            </Helmet>
            <h1>Home Page</h1>
            {userInfo &&(
                <div>
                    <p>Hello {userInfo.username}</p>
                    <p>Your color: {userInfo.color}</p>
                </div>
            )
            }
        </>
    )
}

export default Home