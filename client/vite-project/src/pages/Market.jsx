import auction from './auction.png'

export default function Market() {
    return (
        <div className="container">
            <header className='d-flex justify-content-center gap-5'>
                <div className='p-2 px-5 me-5 d-flex align-items-center ShadowObj' >
                    <img className='img-fluid me-3' src={auction} alt="Auction Pic" style={{ maxWidth: "50px" }} />
                    <h1 className=''>Auction</h1>
                </div>
                <div className='p-2 px-5 me-5 d-flex align-items-center ShadowObj'>
                    <img className='img-fluid me-3' src={auction} alt="Auction Pic" style={{ maxWidth: "50px" }} />
                    <h1>Auction</h1>
                </div>
            </header>
        </div>
    )
}