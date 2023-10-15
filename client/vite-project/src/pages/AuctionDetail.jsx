import { useState, useEffect } from 'react'
import TimeRemaining from "../components/TimeRemaining";


import { GoDotFill } from "react-icons/go";
import tea_leaf from '../assets/png-masterpeach/Icon/tea-leaf.png'
import next from '../assets/png-masterpeach/Icon/next.png'
import bid from '../assets/png-masterpeach/Icon/bid.png'
import info from '../assets/png-masterpeach/Icon/info.png'
import peach from '../assets/png-masterpeach/Icon/peach (8).png'
import peachSad from '../assets/png-masterpeach/Icon/peach-sad.png'

import ProfileId from '../assets/png-masterpeach/digital art pic/1.jpg'
import artId from '../assets/png-masterpeach/digital art pic/Artist 4/1.jpg'

import { useAuctionRoomContext } from '../context/auctionRoomContext'
import axios from 'axios';

function SoldOut() {
  return (
    <div id="solded" className="d-flex justify-content-center z-3 position-absolute top-50 start-50 translate-middle bg-black bg-opacity-50 text text-white fw-medium display-1 p-5">
      <div className="z-4 position-absolute align-self-center">
        Sold
      </div>
    </div>
  )
}

function Lived() {
  return (
    <div className="d-flex justify-content-end liveBlink">
      <div id="AuctionDetail_Live" className="d-flex align-items-center rounded-4 px-3 text-danger">
        <GoDotFill size='1.25rem' />
        <span className="fw-medium ">LIVE</span>
      </div>
    </div>
  )
}

function Ended() {
  return (
    <div className="d-flex justify-content-end">
      <div id="AuctionDetail_End" className="d-flex align-items-center rounded-4 px-3">
        <GoDotFill size='1.25rem' />
        <span className="fw-medium">END</span>
      </div>
    </div>
  )
}


function Description() {
  return (
    <div className="my-2">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
      in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </div>
  )
}

function History() {
  return (
    <div id="History" className="d-grid overflow-auto pt-2 p-lg-3" >
      {/* for 1st bid */}
      <div className="History_Bid d-flex text fw-medium rounded-5 gap-1 mb-3 px-4 py-2">
        <span>
          User1
        </span>

        <span>
          bid
        </span>

        <span className="text fw-bold ">
          1000
        </span>

        <img style={{ maxWidth: "1rem" }} className='img-fluid align-self-center' src={tea_leaf} />
      </div>

      {/* for 2nd bid */}
      <div className="History_Bid d-flex text fw-medium rounded-5 gap-1 mb-3 px-4 py-2">
        <span>
          User2
        </span>

        <span>
          bid
        </span>

        <span className="text fw-bold ">
          1000
        </span>

        <img style={{ maxWidth: "1rem" }} className='img-fluid align-self-center' src={tea_leaf} />
      </div>

      {/* for 3rd bid */}
      <div className="History_Bid d-flex text fw-medium rounded-5 gap-1 mb-3 px-4 py-2">
        <span>
          User3
        </span>

        <span>
          bid
        </span>

        <span className="text fw-bold ">
          1000
        </span>

        <img style={{ maxWidth: "1rem" }} className='img-fluid align-self-center' src={tea_leaf} />
      </div>

      {/* for 4th bid */}
      <div className="History_Bid d-flex text fw-medium rounded-5 gap-1 mb-3 px-4 py-2">
        <span>
          User4
        </span>

        <span>
          bid
        </span>

        <span className="text fw-bold ">
          1000
        </span>

        <img style={{ maxWidth: "1rem" }} className='img-fluid align-self-center' src={tea_leaf} />
      </div>
    </div>
  )
}

function AuctionAvailable() {
  return (
    <div className="row justify-content-center text-center mx-3 my-2">
      <div id="CurrentBid" className="col bg-danger rounded-4 mx-2 py-2 px-4 mb-2">
        <div className="text fw-medium ">
          Current Bid
        </div>
        <div className="d-flex align-items-center justify-content-center gap-1">
          <span className="text fw-bold ">
            1000
          </span>

          <img style={{ maxWidth: "1.25rem" }} className='img-fluid ' src={tea_leaf} />

          <div id="CurrentBid_UserName" className="text fw-medium text-nowrap">
            by UserName
          </div>
        </div>
      </div>

      <div id="CurrentBid" className="col bg-danger rounded-4 mx-2 py-2 px-4 mb-2">
        <div className="text fw-medium ">
          Time Remaining
        </div>

        <div className="text fw-bold">
          <TimeRemaining />
        </div>
      </div>
    </div>
  )
}

function AuctionEnd() {
  return (
    <div className="row justify-content-center text-center mx-3 my-2">
      <div id="FinalPrice" className="col rounded-4 mx-2 py-2 px-4 mb-2">
        <div className="text fw-medium ">
          Final price
        </div>
        <div className="d-flex align-items-center justify-content-center gap-1">
          <span className="text fw-bold ">
            1000
          </span>

          <img style={{ maxWidth: "1.25rem" }} className='img-fluid ' src={tea_leaf} />

        </div>

      </div>

      <div id="TheWinner" className="col rounded-4 mx-2 py-2 px-4 mb-2">
        <div className="text fw-medium ">
          The winner
        </div>

        <div className="text fw-bold">
          UserName
        </div>
      </div>
    </div>
  )
}

function PlaceABid() {
  const [activeModal, setActiveModal] = useState(null);
  const openModal = (modalType) => {
    setActiveModal(modalType);
  };
  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <div>
      <button onClick={() => openModal(3)} type="button" id="Place_Btn" className="btn border border-black border-2 rounded-5 text fw-medium px-5 py-2">
        Place a Bid
      </button>

      {/* Conditionally render the modals */}
      {activeModal === 1 && (
        <div id="Place_Modal" className="modal d-block pt-5" tabIndex="-1">
          {/* Modal 1 content */}
          <div className="modal-dialog">
            <div id="Place_Modal_Content" className="modal-content bg-danger border border-0 rounded-5">
              <div className="position-absolute top-0 end-0 p-3">
                <button type="button" className="btn-close" onClick={closeModal} />
              </div>

              <div id="Place_Modal_Body" className="text-center border border-black rounded-5 bg-white fw-medium p-4 m-5">
                <h3 className="modal-title">Place a Bid</h3>
                <div className="fs-6 d-flex align-items-center justify-content-center gap-1 mb-3">
                  <span>You must bid at least</span>
                  <span>10</span>
                  <img style={{ maxWidth: "1.25rem" }} className='img-fluid' src={tea_leaf} />
                </div>

                <div id="typeBidNumber" className="input-group align-items-center justify-content-center rounded-5 mb-3">
                  <input min="10" type="number" pattern="[0-9]*" placeholder="1000" id="typeBidNumber" className="form-control text text-end boarder border-0 shadow-none rounded-5 py-2" />
                  <img style={{ maxWidth: "2.5rem" }} className='img-fluid pe-3' src={tea_leaf} />
                </div>

                <hr className="border-2 bg-black opacity-100 mb-1" />

                <div className="d-flex justify-content-between fw-medium">
                  <span>
                    Current Bid
                  </span>
                  <div className="d-flex align-items-center gap-1">
                    <span>
                      1000
                    </span>
                    <img style={{ maxWidth: "1.25rem" }} className='img-fluid ' src={tea_leaf} />
                  </div>
                </div>

                <div className="d-flex justify-content-between fw-medium">
                  <span>
                    Your leaf
                  </span>
                  <div className="d-flex align-items-center gap-1">
                    <span>
                      1000
                    </span>
                    <img style={{ maxWidth: "1.25rem" }} className='img-fluid ' src={tea_leaf} />
                  </div>
                </div>

                <div className="d-flex justify-content-between fw-medium">
                  <span>
                    After Bid
                  </span>
                  <div className="d-flex align-items-center gap-1">
                    <span>
                      1000
                    </span>
                    <img style={{ maxWidth: "1.25rem" }} className='img-fluid ' src={tea_leaf} />
                  </div>
                </div>

                <button onClick={() => { openModal(2); alert('Your bidding Successfuly Adds') }} type="button" id="Place_Btn" className="border border-black border-2 rounded-5 text fw-medium px-3 py-2">
                  <span className="pe-2">
                    Confirm
                  </span>
                  <img style={{ maxWidth: "1.25rem" }} className='img-fluid ' src={next} />
                </button>

              </div>
            </div>
          </div>
        </div>
      )}

      {activeModal === 2 && (
        <div id="Place_Modal" className="modal d-block pt-5" tabIndex="-1">
          {/* Modal 2 content */}
          <div className="modal-dialog">
            <div id="Place_Modal_Content" className="modal-content bg-danger border border-0 rounded-5">
              <div className="position-absolute top-0 end-0 p-3">
                <button type="button" className="btn-close" onClick={closeModal} />
              </div>

              <div id="Place_Modal_Body" className="text-center border border-black rounded-5 bg-white fw-medium p-4 m-5">
                <img style={{ maxWidth: "6rem" }} className="img-fluid mb-1" src={peach} />
                <h4>Your bidding<br />Successfuly Adds</h4>
                <div className="mb-3 text text-secondary">back to auction room.</div>

                <button type="button" id="Place_Btn" className="d-flex border border-black border-2 rounded-5 text fw-medium px-4 py-2 mx-auto mb-3" onClick={closeModal}>
                  <span className="pe-3">
                    Back
                  </span>
                  <img id="flip-img" style={{ maxWidth: "1.25rem" }} className='img-fluid align-self-center' src={next} />
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

      {activeModal === 3 && (
        <div id="Place_Modal" className="modal d-block pt-5" tabIndex="-1">
          {/* Modal 3 content */}
          <div className="modal-dialog">
            <div id="Place_Modal_Content" className="modal-content bg-danger border border-0 rounded-5">
              <div className="position-absolute top-0 end-0 p-3">
                <button type="button" className="btn-close" onClick={closeModal} />
              </div>

              <div id="Place_Modal_Body" className="text-center border border-black rounded-5 bg-white fw-medium p-4 m-5">
                <img style={{ maxWidth: "6rem" }} className="img-fluid mb-1" src={peachSad} />
                <h4>Your bidding<br />UnSuccessfuly</h4>
                <div className="mb-3 text text-secondary">You don’t have enough Leaf.</div>

                <button type="button" id="Place_Btn" className="d-flex border border-black border-2 rounded-5 text fw-medium px-5 py-2 mx-auto mb-3" onClick={closeModal}>
                  <span className="">
                    Purchase  Leaf
                  </span>
                </button>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function PlaceBack() {
  return (
    <button type="button" id="Place_Btn" className="d-flex border border-black border-2 rounded-5 text fw-medium px-5 py-2 mx-auto mb-3">
      <span className="pe-2">
        Back
      </span>
      <img id="flip-img" style={{ maxWidth: "1.25rem" }} className='img-fluid align-self-center' src={next} />
    </button>
  )
}


function AuctionDetail() {
  const { isEnterAuctionRoom } = useAuctionRoomContext()



  const [sold, setSold] = useState(null);
  const [activeLive, setActiveLive] = useState(<Lived />);
  const [activeComponent, setActiveComponent] = useState(<Description />);
  const [activeAuction, setActiveAuction] = useState(null);
  const [activePlaceABid, setActivePlaceABid] = useState(null);

  const handleAuction = (status) => {
    //live
    if (status === 1) {
      setSold(null);
      setActiveLive(<Lived />);
      setActiveAuction(<AuctionAvailable />);
      setActivePlaceABid(<PlaceABid />);
    }

    //end
    else if (status === 2) {
      setSold(<SoldOut />);
      setActiveLive(<Ended />);
      setActiveAuction(<AuctionEnd />);
      setActivePlaceABid(<PlaceBack />);
    }
  };

  useEffect(() => {

    axios.get("/auction/" + isEnterAuctionRoom)
      .then((response) => {
        console.log(response.data)
      })
    // Call handleAuction
    const setEvent = 1; // Replace with your condition true or fales

    if (setEvent) {
      handleAuction(1); // You can call it with the desired status
    }
    else {
      handleAuction(2);
    }

  }, []); // Empty dependency array means this effect only runs once after the initial render

  const handleButtonClick = (button) => {
    if (button === 1) {
      setActiveComponent(<Description />);
    }
    else if (button === 2) {
      setActiveComponent(<History />);
    }
  };

  return (
    <div className="">

      <div id="AuctionDetail" className="d-flex flex-column flex-sm-row gap-1 gap-md-3">
        {/* can use d-flex instead of row*/}

        {/* Left start */}
        <div className="d-grid col justify-content-center p-0">
          <div className="container p-0">


            <div className="d-flex z-2 position-absolute gap-2 mt-3 ms-3">
              <img style={{ maxWidth: "3.5rem" }} className='img-fluid border border-1 border-black rounded-5' src={ProfileId} />
              <div className="align-self-center text text-white">@UserName</div>
            </div>

            <div className="position-relative">
              {sold}
              <div id="artistLabel" className="z-1 position-absolute w-100 rounded-5"></div>
              <img className="img-fluid z-0 position-relative w-100 border border-black border-3 rounded-5" src={artId}></img>
            </div>
          </div>
        </div>
        {/* Left End */}

        {/* Right start */}
        <div id="AuctionDetail_card" className="col card p-4">

          {/* Live status */}
          {activeLive}

          {/* Name of work */}
          <h3>
            Name
          </h3>

          {/* setting price & bid */}
          <div className="mb-3">
            <div className="fs-6 d-flex align-items-center gap-1">
              <span>
                Start price
              </span>

              <span className="fw-bold">
                500
              </span>

              <img style={{ maxWidth: "1rem" }} className='img-fluid' src={tea_leaf} />
            </div>

            <div className="fs-6 d-flex align-items-center gap-1">
              <span>
                Minimum bid
              </span>

              <span className="fw-bold">
                10
              </span>

              <img style={{ maxWidth: "1rem" }} className='img-fluid' src={tea_leaf} />
            </div>
          </div>


          <div className="switch-field d-lg-flex gap-3">

            <input type="radio" id="radio-one" name="switch-one" checked />

            <label onClick={() => handleButtonClick(1)} className="d-flex align-items-center gap-2 px-1 py-1 px-lg-3 py-lg-1 mb-2" for="radio-one">
              <img style={{ maxWidth: "1.5rem" }} className='img-fluid ' src={info} />
              <span className="fw-medium">
                Description
              </span>
            </label>


            <input type="radio" id="radio-two" name="switch-one" />
            <label onClick={() => handleButtonClick(2)} className="d-flex align-items-center gap-2 px-1 py-1 px-lg-3 py-lg-1 mb-2" for="radio-two">
              <img style={{ maxWidth: "1.5rem" }} className='img-fluid' src={bid} />
              <span className="fw-medium">
                History
              </span>
            </label>
          </div>

          <hr className="border-2 bg-black opacity-100 mb-1" />
          <div>
            {activeComponent}
          </div>

          <div className="d-flex flex-wrap text fw-medium gap-1">
            <spam>
              Tag:
            </spam>
            <div className="tag_link d-flex flex-wrap gap-2 ">
              <a href='/vintage'>#vintage</a>
              <a href='/woman'>#woman</a>
              <a href='/ButerBye'>#ButerBye</a>
            </div>
          </div>
          <hr className="border-2 bg-black opacity-100 mb-1" />

          {activeAuction}

          <div className="d-flex align-items-center justify-content-center">
            {activePlaceABid}
          </div>

        </div>
        {/* Right End */}
      </div>
    </div>
  )
}

export default AuctionDetail