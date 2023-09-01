import { useEffect } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'

function App() {

    useEffect(() => {

    }, [])
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <Dropdown>
                            <Dropdown.Toggle variant=" primary" id="dropdown-basic">
                                Dropdown Navigation Button
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Dropdown Item 1</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Dropdown Item 2</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Dropdown Item 3</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Dropdown Item 4</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default App