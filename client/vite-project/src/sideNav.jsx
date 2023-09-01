import { useEffect } from 'react'

function Circle(data) {
    return (
        <div className='text-center'>
            <div className='container-fluid rounded-circle border border-dark my-1 p-3 d-flex justify-content-center border' id="bgCircle">
                <img className='img-fluid' src={data.image} alt="img" style={{ objectFit: "cover", maxWidth: "25px" }} />
            </div>
            <p>{data.title}</p>
        </div >
    )
}

function SideNav() {

    useEffect(() => {

    }, [])
    return (
        <div id='SideNavbar' className='my-3 container  d-flex flex-column align-items-center justify-content-center p-0 py-4'>
            <Circle image="https://cdn-icons-png.flaticon.com/512/747/747376.png" title="User" />
            <Circle image="https://cdn-icons-png.flaticon.com/512/3144/3144456.png" title="Market" />
            <Circle image="https://cdn-icons-png.flaticon.com/512/10493/10493896.png" title="Artwork" />
            <Circle image="https://cdn-icons-png.flaticon.com/512/6633/6633232.png" title="Trend" />
            <div id='AlertNav' className='rounded-pill px-4 py-2 mt-5 mb-4'>
                alert
            </div>
        </div>
    )
}

export default SideNav