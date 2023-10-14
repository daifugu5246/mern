import { useEffect, useState } from 'react'
import purchase from '../assets/purchase.png'
import auction from '../assets/auction.png'
import leaf from '../assets/tea-leaf.png'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useAuctionRoomContext } from '../context/auctionRoomContext'

axios.defaults.baseURL = 'http://localhost:5000'
let pictureAuction = [

]
const pictureSelling = [
    { id: 1, picture: "Test", alt: "pic1", price: "100" },
    { id: 2, picture: "Test", alt: "pic2", price: "100" },
    { id: 3, picture: "Test", alt: "pic3", price: "100" },
    { id: 4, picture: "Test", alt: "pic4", price: "100" }
]
function Auction(data) {
    const navigate = useNavigate()
    const { isEnterAuctionRoom, enterAuctionRoom } = useAuctionRoomContext()

    const handleToAuctionRoom = (id) => {
        enterAuctionRoom(id)
        navigate("/AuctionDetail")
    }
    useEffect(() => {

    })
    return (
        <div id="AuctionPage" >
            <div className='row mt-4' >
                {pictureAuction.map((picture, index) => {
                    return (

                        <div key={index} className='col-3 mb-3' onClick={() => handleToAuctionRoom(picture._id)}>
                            <div className='ShadowObj rounded' style={{ minHeight: "322px" }}>
                                <img style={{ height: "240px", width: "293px", objectFit: "cover" }} loading='lazy' className='' src={"data:image/jpeg;base64," + picture.image} alt={picture.title} />
                                <div style={{ minHeight: "82px", borderTop: "3.5px solid #0F0C0C" }} className='d-flex align-items-center justify-content-center'>
                                    <img style={{ maxWidth: "30px" }} className='img-fluid me-2 mb-2' src={leaf} />
                                    <h4 className='fw-bold'>{picture.current_price}</h4>
                                </div>
                            </div>

                        </div>
                    );
                })}
            </div>
        </div>
    )
}

function Purchase() {
    return (
        <div id="PurchasePage">
            <div className='row mt-4' >
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


export default function Market() {

    const navigate = useNavigate()
    const [loading, isloading] = useState(false)


    function LoadPic() {
        axios.get('/auction', {

        }).then((respond) => {
            const arr = respond.data
            arr.forEach(element => {
                pictureAuction.push(element)
            });
            console.log(pictureAuction)
            isloading(true)
        })
    }

    function navigateTo(i) {
        if (i == 'p') navigate('/purchase')
        else if (i == 'a') navigate('/auction')
    }
    useEffect(() => {
        if (!loading) {
            pictureAuction = []
            LoadPic()
        }
        else {
            const pathname = window.location.pathname
            const aunction = document.getElementById("Auction")
            const purchase = document.getElementById("Purchase")
            aunction.style.cursor = "pointer"
            purchase.style.cursor = "pointer"
            const aunctionPage = document.getElementById("AuctionPage")
            const purchasePage = document.getElementById("PurchasePage")
            if (pathname == "/auction") {
                aunction.style.backgroundColor = "#FAAE63"
                purchase.style.backgroundColor = "#FD997F"
                aunctionPage.style.display = "block"
                purchasePage.style.display = "none"
            } else if (pathname == "/purchase") {
                purchase.style.backgroundColor = "#FAAE63"
                aunction.style.backgroundColor = "#FD997F"
                aunctionPage.style.display = "none"
                purchasePage.style.display = "block"
            }
        }
    })
    if (loading) {
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
                <Auction />
                <Purchase />
            </div>

        )
    }
    else {
        return <div className='container'>
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
        </div>
    }
}