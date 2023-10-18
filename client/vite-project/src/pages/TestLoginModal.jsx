import logo from '../assets/png-masterpeach/Icon/logo-draft-resize.png'
import login_BG from '../assets/login_BG.jpg'
import { useState } from 'react'
import { useLoginContext } from '../context/loginContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function TestLoginModal() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
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
                console.log(response.data)
                login(response.data._id, response.data.username, response.data.name, response.data.description, response.data.leaf, response.data.peach)
                document.getElementById("btnForClose").click()
                navigate('/auction');
            }
        }).catch((error) => {
            console.error(error)
        })
        setUsername('')
        setPassword('')
    }
    return (
        <div>
            <button id="LoginButton" className="btn border-0 mt-1" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <h5>Login</h5>
            </button>

            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="true" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div id="roundedModal" className="modal-dialog modal-dialog-centered modal-lg m-sm-auto mx-3">
                    <div id="roundedModal" className="modal-content">
                        <div className="h-100 gradient-form">
                            <div id="LoginModal" className="row justify-content-center align-items-center h-100">

                                <div className="row flex-sm-row-reverse g-0">
                                    <div className="col-lg-6">
                                        <div className="container">
                                            <div className="row justify-content-end pt-4 pe-4">
                                                <button id="btnForClose" type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                        </div>
                                        <div className="p-2 p-sm-3 mx-sm-2 mx-xl-4">

                                            <div className="text-center">
                                                <img style={{ maxWidth: "90px" }} className='img-fluid' src={logo} />
                                                <h1 className="mt-1 mb-4 pb-1">Login</h1>
                                            </div>

                                            <form onSubmit={handleSubmit}>
                                                <div className="form-outline mb-4">
                                                    <input type="text" id='username' className="form-control rounded-5 border-2 border-secondary" value={username} onChange={(e) => setUsername(e.target.value)} required
                                                        placeholder="Enter Username or Email" />
                                                </div>

                                                <div className="form-outline mb-4">
                                                    <input type="password" id="password" className="form-control rounded-5 border-2 border-secondary" value={password} onChange={(e) => setPassword(e.target.value)} required
                                                        placeholder="Enter Password" />
                                                    <div className="d-flex flex-row-reverse" >
                                                        <a className="text-muted fst-italic" href="#!">Forgot password?</a>
                                                    </div>
                                                </div>

                                                <div className="text-center pt-1 ">
                                                    <button id="LoginButton" className="btn fa-lg px-5 py-2 border-3 border-top-0 border-start-0 border-end-0" type="submit">
                                                        Login
                                                    </button>
                                                </div>

                                                <div className="d-flex align-items-center justify-content-center pb-4 mb-5">
                                                    <p className="mb-0 me-2">Don't have an account?, </p>
                                                    <a className="text-muted fst-italic" href="#!">Register</a>
                                                </div>

                                            </form>

                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-center">
                                        <img className='img-fluid gradient-custom-2' src={login_BG} />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TestLoginModal;