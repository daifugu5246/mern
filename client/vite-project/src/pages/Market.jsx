import { useEffect } from 'react'
import purchase from '../assets/purchase.png'
import auction from '../assets/auction.png'
import leaf from '../assets/tea-leaf.png'
import { useNavigate } from 'react-router-dom'

export default function Market() {
    const navigate = useNavigate()

    const pictureSelling = [
        { id: 1, picture: "Test", alt: "pic1", price: "100" },
        { id: 2, picture: "Test", alt: "pic2", price: "100" },
        { id: 3, picture: "Test", alt: "pic3", price: "100" },
        { id: 4, picture: "Test", alt: "pic4", price: "100" },
        { id: 5, picture: "Test", alt: "pic5", price: "100" },
        { id: 6, picture: "Test", alt: "pic6", price: "100" },
        { id: 7, picture: "Test", alt: "pic7", price: "100" },
        { id: 8, picture: "Test", alt: "pic8", price: "100" },
        { id: 9, picture: "Test", alt: "pic9", price: "100" },
        { id: 10, picture: "Test", alt: "pic10", price: "100" },
        { id: 11, picture: "Test", alt: "pic11", price: "100" }
    ]

    function navigateTo(i) {
        if (i == 'p') navigate('/market/purchase')
        else if (i == 'a') navigate('/market/auction')
    }
    useEffect(() => {
        console.log("555")
        const pathname = window.location.pathname
        const aunction = document.getElementById("Auction")
        const purchase = document.getElementById("Purchase")
        if (pathname == "/market/auction") {
            aunction.style.backgroundColor = "#FAAE63"
            purchase.style.backgroundColor = "#FD997F"
        } else if (pathname == "/market/purchase") {
            purchase.style.backgroundColor = "#FAAE63"
            aunction.style.backgroundColor = "#FD997F"
        }
    })
    return (
        <div className="container">
            <header className='d-flex justify-content-center gap-5'>
                <div id="Purchase" className='p-2 px-5 me-5 d-flex align-items-center ShadowObj' onClick={() => navigateTo("p")}>
                    <img className='img-fluid me-3' src={purchase} alt="Auction Pic" style={{ maxWidth: "50px" }} />
                    <h1 className=''>Purchase</h1>
                </div>
                <div id="Auction" className='p-2 px-5 me-5 d-flex align-items-center ShadowObj' onClick={() => navigateTo("a")}>
                    <img className='img-fluid me-3' src={auction} alt="Auction Pic" style={{ maxWidth: "50px" }} />
                    <h1>Auction</h1>
                </div>
            </header>

            <div className='row mt-4'>
                {pictureSelling.map((picture, index) => {
                    return (
                        <div key={index} className='col-3 mb-3'>
                            <div className='ShadowObj rounded' style={{ minHeight: "322px" }}>
                                <img style={{ minHeight: "240px" }} className='' src={picture.picture} alt={picture.alt} />
                                <div style={{ minHeight: "82px" }} className='border-top border-5 border-dark d-flex align-items-center justify-content-center'>
                                    <img style={{ maxWidth: "30px" }} className='img-fluid me-2 mb-2' src={leaf} />
                                    <h4 className='fw-bold'>{picture.price}</h4>
                                </div>
                            </div>

                        </div>
                    );
                })}

            </div>
        </div>
    )
}