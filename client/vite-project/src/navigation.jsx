import { useEffect, useState } from 'react'
import logo from './logo.png'
import leaf from './pages/tea-leaf.png'
import peach from './pages/peach.png'
import basket from './pages/wicker-basket.png'

function NotLogin() {
    return (
        <nav id='TopNavbar' className="navbar navbar-expand-lg navbar-light border-bottom border-dark notlogin">
            <div className="container-fluid d-flex justify-content-center align-items-center position-relative">
                <a className="navbar-brand d-flex" href="/">
                    <img style={{ maxWidth: "40px" }} className='img-fluid' src={logo} />
                    <h3>MasterPeach</h3>
                </a>
                <div className='position-absolute end-0'>
                    <button className='btn'><h5>Login</h5></button>
                    <button className='btn'><h5 className='px-2 py-1 pb-2 rounded-pill' style={{ backgroundColor: "lightgray" }}>Register</h5></button>
                </div>

            </div>

        </nav>
    )
}

function Loggedin() {
    return (
        <nav id='TopNavbar' className="navbar navbar-expand-lg navbar-light border-bottom border-dark loggedin">
            <div className="container-fluid">
                <a className="navbar-brand me-5" href="/">
                    <img style={{ maxWidth: "40px" }} className='img-fluid' src={logo} />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse ms-5 position-relative d-flex align-items-center" id="navbarSupportedContent">
                    <form className="d-flex ">
                        <input className="form-control me-2 rounded-pill border-0 nosubmit" type="search" id='Searchbar' name='Searchbar' placeholder='Search...' aria-label="Search" />
                        <button id='btn-Search' className="btn rounded-pill px-4" type="submit">Search</button>
                    </form>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 position-absolute end-0 d-flex align-items-center">
                        <li className="nav-item">
                            <img style={{ maxWidth: "25px" }} className='img-fluid me-3' src={leaf} />
                            <a id='leaf' className="btn rounded-pill px-4" href="#">100,000</a>
                        </li>
                        <li className="nav-item">
                            <img style={{ maxWidth: "25px" }} className='img-fluid mx-3' src={peach} />
                            <a id='peach' className="btn rounded-pill px-4" href="#">100,000</a>
                        </li>
                        <li className="nav-item">
                            <a><img style={{ maxWidth: "45px", backgroundColor: "#FDE4D0" }} className='mx-3 border rounded-circle p-2' src={basket} /></a>


                        </li>
                        <li className="nav-item">
                            <button id='btn-Log_out' className="btn rounded-pill px-4" type="submit">Log out</button>
                        </li>

                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default function Navigationbar() {
    const [login, setLogin] = useState(1)
    useEffect(() => {
        setLogin(1)
        if (!login) {
            const n1 = document.getElementsByClassName("loggedin")[0]
            const n2 = document.getElementsByClassName("notlogin")[0]
            n1.style.display = "none"
            n2.style.display = "block"
        }
        else if (login) {
            const n1 = document.getElementsByClassName("loggedin")[0]
            const n2 = document.getElementsByClassName("notlogin")[0]
            n1.style.display = "block"
            n2.style.display = "none"
        }
    }, [])
    return (
        <>
            <NotLogin />
            <Loggedin />
        </>

    )
}
