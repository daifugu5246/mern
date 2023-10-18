import { useState, useEffect } from 'react'
import { TimeRemaining, state } from "../components/TimeRemaining";


import { GoDotFill } from "react-icons/go";
import tea_leaf from '../assets/png-masterpeach/Icon/tea-leaf.png'
import next from '../assets/png-masterpeach/Icon/next.png'
import bid from '../assets/png-masterpeach/Icon/bid.png'
import info from '../assets/png-masterpeach/Icon/info.png'
import peach from '../assets/png-masterpeach/Icon/peach (8).png'
import peachSad from '../assets/png-masterpeach/Icon/peach-sad.png'

import ProfileId from '../assets/png-masterpeach/digital art pic/1.jpg'

import { useAuctionRoomContext } from '../context/auctionRoomContext'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useLoginContext } from '../context/loginContext';

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


function Description(data) {
  return (
    <div className="my-2">
      {data.description}
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

function AuctionAvailable(data) {
  const [username, setUsername] = useState()
  axios.get('/auction/get-owners/' + data.owners_id, {
  }).then((response) => {
    console.log(response)
    if (response.status == 200) setUsername("by " + response.data.owners_username)
    console.log(response.data.owners_username)
  }).catch((error) => {
    console.error(error)
  })
  return (
    <div className="row justify-content-center text-center mx-3 my-2">
      <div id="CurrentBid" className="col bg-danger rounded-4 mx-2 py-2 px-4 mb-2">
        <div className="text fw-medium ">
          Current Bid
        </div>
        <div className="d-flex align-items-center justify-content-center gap-1">
          <span className="text fw-bold ">
            {data.current}
          </span>

          <img style={{ maxWidth: "1.25rem" }} className='img-fluid ' src={tea_leaf} />

          <div id="CurrentBid_UserName" className="text fw-medium text-nowrap">
            {username}
          </div>
        </div>
      </div>

      <div id="CurrentBid" className="col bg-danger rounded-4 mx-2 py-2 px-4 mb-2">
        <div className="text fw-medium ">
          Time Remaining
        </div>

        <div className="text fw-bold">
          <TimeRemaining endtime={data.endtime} />
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

function PlaceABid(data) {
  const [statebid, setStatebid] = useState(false)
  const { isLoggedin, login } = useLoginContext()
  const [activeModal, setActiveModal] = useState(null);
  const [input, setinput] = useState();
  const [error, setError] = useState();
  const [st, setSt] = useState();
  const navigate = useNavigate()

  if (data.status == "LIVE" && st == null) {
    setSt(1)
  } else if (data.status == "END" && st == null) {
    setSt(0)
  }
  const Display = () => {
    if (input == null) return isLoggedin.leaf
    else return isLoggedin.leaf - input
  }

  const check = (e) => {
    e.preventDefault()
    if (input % 1 != 0) {
      console.log()
    }
    else if (input < 0) alert("-");
    else if (input == data.current || input < data.current + data.increment || input < data.current || input < data.start_price) {
      setError("")
      openModal(4);
    }
    else if (isLoggedin.leaf - input < 0) {
      setError("You don’t have enough Leaf")
      openModal(3);
    }
    else if (isLoggedin.leaf >= input) {
      console.log("/auction/" + data.id + "/bid-confirm")
      console.log(isLoggedin.id)
      console.log(input)
      axios.patch("/auction/" + data.id + "/bid-confirm", {
        user_id: isLoggedin.id,
        bid_value: input
      }).then((response) => {
        if (response.status == 200) {
          console.log(response)
          openModal(2)
          setStatebid(response.data.user_leaf)

        } else {
          setError("")
          openModal(3)
        }
      }).catch((error) => {
        console.error(error)
      })


    }
    setinput();
  }

  const invalid = (e) => {
    if (input == null) e.target.setCustomValidity("Amount required")
    else if (input % 1.0 != 0 || input < 0) e.target.setCustomValidity("Cardinal Number only")
  }

  const openModal = (modalType) => {
    setActiveModal(modalType);
  };
  const closeModal = () => {
    setActiveModal(null);
    if (statebid != false) login(isLoggedin.id, isLoggedin.username, isLoggedin.name, isLoggedin.description, statebid, isLoggedin.peach)
  };


  return (
    <div>
      <button onClick={() => openModal(1)} type="button" id="Place_Btn" className="btn border border-black border-2 rounded-5 text fw-medium px-5 py-2">
        Place a Bid
      </button>

      {/* Conditionally render the modals */}
      {activeModal === 1 && (
        <div id="Place_Modal" className="modal d-block pt-5" tabIndex="-1">
          {/* Modal 1 content */}
          <form onSubmit={(e) => check(e)}>
            <div className="modal-dialog">
              <div id="Place_Modal_Content" className="modal-content bg-danger border border-0 rounded-5">
                <div className="position-absolute top-0 end-0 p-3">
                  <button type="button" className="btn-close" onClick={closeModal} />
                </div>

                <div id="Place_Modal_Body" className="text-center border border-black rounded-5 bg-white fw-medium p-4 m-5">
                  <h3 className="modal-title">Place a Bid</h3>
                  <div className="fs-6 d-flex align-items-center justify-content-center gap-1 mb-3">
                    <span>You must bid at least</span>
                    <span>{data.increment}</span>
                    <img style={{ maxWidth: "1.25rem" }} className='img-fluid' src={tea_leaf} />
                  </div>

                  <div id="typeBidNumber" className="input-group align-items-center justify-content-center rounded-5 mb-3">
                    <input min="10" type="number" pattern="[0-9]*" value={input} onChange={(e) => { setinput(e.target.value), e.target.setCustomValidity("") }} placeholder={data.current + data.increment} id="typeBidNumber" className="form-control text text-end boarder border-0 shadow-none rounded-5 py-2"
                      required onInvalid={(e) => invalid(e)}
                    />
                    <img style={{ maxWidth: "2.5rem" }} className='img-fluid pe-3' src={tea_leaf} />
                  </div>

                  <hr className="border-2 bg-black opacity-100 mb-1" />

                  <div className="d-flex justify-content-between fw-medium">
                    <span>
                      Current Bid
                    </span>
                    <div className="d-flex align-items-center gap-1">
                      <span>
                        {data.current}
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
                        {isLoggedin.leaf}
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
                        <Display />
                      </span>
                      <img style={{ maxWidth: "1.25rem" }} className='img-fluid ' src={tea_leaf} />
                    </div>
                  </div>

                  <button type="submit" id="Place_Btn" className="border border-black border-2 rounded-5 text fw-medium px-3 py-2">
                    <span className="pe-2">
                      Confirm
                    </span>
                    <img style={{ maxWidth: "1.25rem" }} className='img-fluid ' src={next} />
                  </button>

                </div>
              </div>
            </div>
          </form>
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
                <h4>Your bidding<br />Successfully adds</h4>
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
                <div className="mb-3 text text-secondary">{error}</div>

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
      {activeModal === 4 && (
        <div id="Place_Modal" className="modal d-block pt-5" tabIndex="-1">
          {/* Modal 4 content */}
          <div className="modal-dialog">
            <div id="Place_Modal_Content" className="modal-content bg-danger border border-0 rounded-5">
              <div className="position-absolute top-0 end-0 p-3">
                <button type="button" className="btn-close" onClick={closeModal} />
              </div>

              <div id="Place_Modal_Body" className="text-center border border-black rounded-5 bg-white fw-medium p-4 m-5">
                <img style={{ maxWidth: "6rem" }} className="img-fluid mb-1" src={peachSad} />
                <h4>Your bidding<br />UnSuccessfuly</h4>
                <div className="mb-3 text text-secondary">{error}</div>

                <button type="button" id="Place_Btn" className="d-flex border border-black border-2 rounded-5 text fw-medium px-5 py-2 mx-auto mb-3" onClick={closeModal}>
                  <span className="">
                    Back to Auction room
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

function PlaceBack(data) {
  const [activeModal, setActiveModal] = useState(null);
  const navigate = useNavigate()
  const openModal = (modalType) => {
    setActiveModal(modalType);
  };
  const closeModal = () => {
    setActiveModal(null);
  };
  useEffect(() => {
    if (data.status == "LIVE") document.getElementById("InvisibleButton").click();

  }, [])
  return (
    <>
      <button onClick={() => openModal(1)} type="button" id="InvisibleButton" className="d-none btn border border-black border-2 rounded-5 text fw-medium px-5 py-2">
        Place a Bid
      </button>
      <button type="button" id="Place_Btn" className="d-flex border border-black border-2 rounded-5 text fw-medium px-5 py-2 mx-auto mb-3" onClick={() => navigate("/auction")}>
        <span className="pe-2">
          Back
        </span>
        <img id="flip-img" style={{ maxWidth: "1.25rem" }} className='img-fluid align-self-center' src={next} />
      </button>
      {activeModal === 1 && (
        <div id="Place_Modal" className="modal d-block pt-5" tabIndex="-1">
          {/* Modal 4 content */}
          <div className="modal-dialog">
            <div id="Place_Modal_Content" className="modal-content bg-danger border border-0 rounded-5">
              <div className="position-absolute top-0 end-0 p-3">
                <button type="button" className="btn-close" onClick={closeModal} />
              </div>

              <div id="Place_Modal_Body" className="text-center border border-black rounded-5 bg-white fw-medium p-4 m-5">
                <img style={{ maxWidth: "6rem" }} className="img-fluid mb-1" src={peachSad} />
                <h4>This auction room has<br /> ended</h4>

                <button type="button" id="Place_Btn" className="d-flex border border-black border-2 rounded-5 text fw-medium px-5 py-2 mx-auto mb-3" onClick={closeModal}>
                  <span className="">
                    Back to Auction Room
                  </span>
                </button>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  )
}


function Detail(data) {
  const [id] = useState(data.id);
  const [event, setevent] = useState(1)
  const [sold, setSold] = useState(null);
  const [activeLive, setActiveLive] = useState(<Lived />);
  const [activeComponent, setActiveComponent] = useState(<Description description={id.description} />);
  const [activeAuction, setActiveAuction] = useState(null);
  const [activePlaceABid, setActivePlaceABid] = useState(null);
  const [ch1, setCh1] = useState(false)
  const tag = id.tag.split(" ")
  console.log(tag)
  const handleAuction = (status) => {

    //live
    if (status === 1) {
      setSold(null);
      setActiveLive(<Lived />);
      setActiveAuction(<AuctionAvailable current={id.current_price} endtime={id.end_at} owners_id={id.owners_id} />);
      setActivePlaceABid(<PlaceABid id={id._id} increment={id.increment} current={id.current_price} leaf={200} status={id.status} start_price={id.start_price} />);
    }

    //end
    else if (status === 2) {
      setSold(<SoldOut />);
      setActiveLive(<Ended />);
      setActiveAuction(<AuctionEnd />);
      setActivePlaceABid(<PlaceBack status={id.status} />);
    }
  };
  useEffect(() => {
    console.log(id)
    /*if (id.status != "END") {
      setevent(state)
    }
    else {
      setevent(0)
    }*/
    if (state == 0) setevent(0)
    else setevent(1)
    if (event) {
      handleAuction(1); // You can call it with the desired status
    }
    else {
      handleAuction(2);
    }
    // Call handleAuction

  }, [state, event, id]); // Empty dependency array means this effect only runs once after the initial render

  const handleButtonClick = (button) => {
    if (button === 1) {
      setCh1(false)
      setActiveComponent(<Description description={id.description} />);
    }
    else if (button === 2) {
      setCh1(true)
      setActiveComponent(<History />);
    }
  };

  if (id != null)
    return (
      <div className="">
        <div id="AuctionDetail" className="d-flex flex-column flex-sm-row gap-1 gap-md-3">
          {/* can use d-flex instead of row*/}

          {/* Left start */}
          <div className="d-grid col justify-content-center p-0">
            <div className="container p-0">


              <div className="d-flex z-2 position-absolute gap-2 mt-3 ms-3">
                <img style={{ maxWidth: "3.5rem" }} className='img-fluid border border-1 border-black rounded-5' src={ProfileId} />
                <div className="align-self-center text text-white">@Username</div>
              </div>

              <div className="position-relative">
                {sold}
                <div id="artistLabel" className="z-1 position-absolute w-100 rounded-5"></div>
                <img className="img-fluid z-0 position-relative w-100 border border-black border-3 rounded-5" src={"data:image/jpeg;base64," + id.image}></img>
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
              {id.title}
            </h3>

            {/* setting price & bid */}
            <div className="mb-3">
              <div className="fs-6 d-flex align-items-center gap-1">
                <span>
                  Start price
                </span>

                <span className="fw-bold">
                  {id.start_price}
                </span>

                <img style={{ maxWidth: "1rem" }} className='img-fluid' src={tea_leaf} />
              </div>

              <div className="fs-6 d-flex align-items-center gap-1">
                <span>
                  Minimum bid
                </span>

                <span className="fw-bold">
                  {id.increment}
                </span>

                <img style={{ maxWidth: "1rem" }} className='img-fluid' src={tea_leaf} />
              </div>
            </div>


            <div className="switch-field d-lg-flex gap-3">

              <input type="radio" id="radio-one" name="switch-one" checked={!ch1} />

              <label onClick={() => handleButtonClick(1)} className="d-flex align-items-center gap-2 px-1 py-1 px-lg-3 py-lg-1 mb-2" htmlFor="radio-one">
                <img style={{ maxWidth: "1.5rem" }} className='img-fluid ' src={info} />
                <span className="fw-medium">
                  Description
                </span>
              </label>


              <input type="radio" id="radio-two" name="switch-one" checked={ch1} />
              <label onClick={() => handleButtonClick(2)} className="d-flex align-items-center gap-2 px-1 py-1 px-lg-3 py-lg-1 mb-2" htmlFor="radio-two">
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

                {tag.map((t, index) => {
                  return (
                    <a key={index} href="#">{"#" + t}</a>
                  )
                })}
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


export default function AuctionDetail() {
  const navigate = useNavigate()
  const [loading, setloading] = useState(true)
  const [id, setid] = useState(null);
  const { isEnterAuctionRoom } = useAuctionRoomContext()
  const { isLoggedin } = useLoginContext()

  if (isEnterAuctionRoom == "" && window.location.pathname != "/auction/debug") navigate("/auction")


  useEffect(() => {
    setloading(true)
    if (window.location.pathname == "/auction/debug") {
      const arr = { _id: "1234", price: "100", title: "imgae", current_price: "1000", increment: "50", status: "END", start_price: "100", end_at: "2023_10_17" }
      setid(arr)
      setloading(false)
    }
    else if (window.location.pathname != "/auction/debug") {

      axios.get("/auction/" + isEnterAuctionRoom)
        .then((response) => {
          console.log(response.data.art.owner_id)
          if (response.status === 200) setid(response.data.art)
          setloading(false)
        }).catch((error) => {
          console.error(error)
        })
    }
  }, [isLoggedin.leaf])

  if (loading) {
    return (
      <div className="position-absolute top-50 start-50 loader"></div>

    )
  } else if (!loading) {
    return <Detail id={id} />
  }
}