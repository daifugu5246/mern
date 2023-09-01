import { useEffect } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'

function App() {

    useEffect(() => {

    }, [])
    return (
        <nav id='TopNavbar' className="navbar navbar-expand-lg navbar-light border-bottom border-dark">
            <div className="container-fluid">
                <a className="navbar-brand bg-white rounded-circle px-2" href="#">MP</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="d-flex ">
                        <input className="form-control me-2 rounded-pill border-0 nosubmit" type="search" id='Searchbar' name='Searchbar' placeholder='Search...' aria-label="Search" />
                        <button id='btn-Search' className="btn rounded-pill px-4" type="submit">Search</button>
                    </form>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <Dropdown>
                            <Dropdown.Toggle variant="" id="dropdown-basic">
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

                </div>
            </div>
        </nav>
    )
}

export default App