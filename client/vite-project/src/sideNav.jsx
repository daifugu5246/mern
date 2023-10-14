import { useEffect, useState } from "react";
import noti from "./assets/noti.png";
import setting from "./assets/setting.png";
import question from "./assets/question.png";
import axios from "axios";
import { useLoginContext } from "./context/loginContext";
import { Link, useNavigate } from "react-router-dom";
axios.defaults.baseURL = "http://localhost:5000";



function Circle(data) {
  function hoverCircle() {
    const idcircle = document.getElementById(data.title);
    idcircle.style.transition = "all 0.2s"
    idcircle.style.backgroundColor = "#FCD3B4";
  }
  function normalCircle() {
    const idcircle = document.getElementById(data.title);
    idcircle.style.transition = "all 0.2s";
    idcircle.style.backgroundColor = "#ffeee1";
  }


  return (
    <div
      id={data.path}
      className={"text-center " + data.d}
      onMouseOver={() => hoverCircle()}
      onMouseOut={() => normalCircle()}
    >
      <Link to={"/" + data.path}>
        <div
          id={data.title}
          className="container-fluid rounded-circle border border-dark  p-3 d-flex justify-content-center border bgCircle"
        >
          <img
            className="img-fluid"
            src={data.image}
            alt="img"
            style={{ objectFit: "cover", maxWidth: "25px" }}
          />
        </div>
      </Link>
      <p>{data.title}</p>
    </div>
  );
}

function ModalArtwork() {
  const [state, isstate] = useState(1);
  const [image, setImage] = useState("http://drive.google.com/uc?export=view&id=1cXj8wYhFalP1opSKwAq_zeSMg9oHbwmp")
  const [width, setwidth] = useState("25px")


  const [base64Image, setBase64Image] = useState("");

  const [title, settitle] = useState("")
  const [tag, settag] = useState("")
  const [desc, setdesc] = useState("")
  const [price, setprice] = useState("")
  const [minimum, setminimum] = useState("")
  const [startdate, setstartdate] = useState("")
  const [enddate, setenddate] = useState("")


  const handleSubmit = (e) => {
    console.log(base64Image)

  }

  const onImageChange = (event) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      let base64String = e.target.result;

      const i = true
      while (i) {
        if (base64String[0] == ",") {
          base64String = base64String.substring(1)
          break
        }

        else base64String = base64String.substring(1)
      } setBase64Image(base64String);
    };

    reader.readAsDataURL(event.target.files[0]);

    if (event.target.files && event.target.files[0]) {
      setwidth("415px")
      setImage(URL.createObjectURL(event.target.files[0]));

    }
  }

  function inputImage() {
    const inputimage = document.getElementById("getimage")
    inputimage.click()
  }

  useEffect(() => {
    const sell = document.getElementById("pills-sell-tab");
    const auction = document.getElementById("pills-auction-tab");
    if (state) {

      sell.style.backgroundColor = "#CF594D";
      sell.style.color = "white";
      auction.style.backgroundColor = "#FFD7B9";
      auction.style.color = "#0F0C0C";

    }
    else {
      sell.style.backgroundColor = "#FFD7B9";
      sell.style.color = "#0F0C0C";
      auction.style.backgroundColor = "#CF594D";
      auction.style.color = "white";

    }
  })

  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div
        id="ArtworkModal"
        className="modal-dialog modal-dialog-scrollable modal-dialog-centered"
      >
        <div
          className="modal-content"
          style={{
            width: "800px",
            height: "918px",
            background: "#FFD7B9",
            justifyContent: "center",
            shadow: " 2px 3px 15px 5px rgba(0, 0, 0, 0.25)",
            borderRadius: "45px",
            padding: "0px",
          }}
        >

          <div
            className="modal-body"
            style={{ margin: "0px", padding: "0px" }}
          >
            <ul className="nav">
              <button
                onClick={() => isstate(1)}
                className="col-6 d-flex py-auto justify-content-center border-0 border-end border-black border-1 align-items-center"
                id="pills-sell-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-sell"
                aria-controls="pills-sell"
                aria-selected="true"

                /* style={{ height: "61px"}}*/

                style={{
                  height: "61px",
                  transition: "0.5s"
                }}
              >
                <li
                  role="presentation"
                  id="pill-sell-item"
                >
                  <h4>Sell</h4>
                </li>
              </button>
              <button
                onClick={() => isstate(0)}
                className="col-6 d-flex py-auto justify-content-center border-0 border-start border-#0F0C0C border-1 align-items-center"
                id="pills-auction-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-auction"
                type="button"
                role="tab"
                aria-controls="pills-auction"
                aria-selected="false"
                style={{
                  height: "61px",
                  transition: "0.5s"
                }}
              >
                <li className="" role="presentation">
                  <h4>Auction</h4>

                </li>
              </button>
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-sell"
                role="tabpanel"
                aria-labelledby="pills-sell-tab"
              >
                {/* add pic */}
                <button
                  className="uploadPicButton"
                  style={{
                    width: "415px",
                    height: "269px",
                    flexShrink: "0",
                    borderRadius: "45px",
                    background: "rgba(15, 12, 12, 0.14)",
                    margin: "20px 34px 20px 34px",
                  }}
                >
                  <img
                    className="img-fluid"
                    src="http://drive.google.com/uc?export=view&id=1cXj8wYhFalP1opSKwAq_zeSMg9oHbwmp"
                    alt="img"
                    style={{
                      objectFit: "cover",
                      maxWidth: "25px",
                      radius: "45px",
                    }}
                  />
                </button>

                <div className="addPicForm" style={{ marginBottom: "20px" }}>
                  <label
                    style={{
                      width: "110px",
                      height: "35px",
                      borderRadius: "27px",
                      background: "#FD997F",
                      color: "#0F0C0C",
                      textAlign: "center",
                      fontSize: "17px",
                      fontStyle: "normal",
                      fontWeight: "600",
                      marginLeft: "40px",
                      paddingTop: "5px",
                    }}
                  >
                    Art title
                  </label>
                  <input
                    style={{
                      width: "275px",
                      height: "35px",
                      paddingLeft: "15px",
                      paddingRight: "15px",
                      marginLeft: "25px",
                      borderRadius: "27px",
                      borderTop: "1px solid #000",
                      borderRight: "1px solid #000",
                      borderBottom: "2px solid #000",
                      borderLeft: "2px solid #000",
                      background: "#FFEEE1",
                    }}
                    type="text"
                    placeholder="Limit 50 letters"
                  ></input>
                </div>

                <div className="addPicForm" style={{ marginBottom: "20px" }}>
                  <label
                    style={{
                      width: "110px",
                      height: "35px",
                      borderRadius: "27px",
                      background: "#FD997F",
                      color: "#0F0C0C",
                      textAlign: "center",
                      fontSize: "17px",
                      fontStyle: "normal",
                      fontWeight: "600",
                      marginLeft: "40px",
                      paddingTop: "5px",
                    }}
                  >
                    Tag
                  </label>
                  <input
                    style={{
                      width: "275px",
                      height: "35px",
                      paddingLeft: "15px",
                      paddingRight: "15px",
                      marginLeft: "25px",
                      borderRadius: "27px",
                      borderTop: "1px solid #000",
                      borderRight: "1px solid #000",
                      borderBottom: "2px solid #000",
                      borderLeft: "2px solid #000",
                      background: "#FFEEE1",
                    }}
                    type="text"
                    placeholder="Limit 50 letters"
                  ></input>
                </div>

                <div className="addPicForm" style={{ marginBottom: "20px" }}>
                  <label
                    style={{
                      width: "110px",
                      height: "35px",
                      borderRadius: "27px",
                      background: "#FD997F",
                      color: "#0F0C0C",
                      textAlign: "center",
                      fontSize: "17px",
                      fontStyle: "normal",
                      fontWeight: "600",
                      marginLeft: "40px",
                      paddingTop: "5px",
                    }}
                  >
                    Description
                  </label>
                  <input
                    style={{
                      width: "275px",
                      height: "113px",
                      paddingLeft: "15px",
                      paddingRight: "15px",
                      marginLeft: "25px",
                      borderRadius: "27px",
                      borderTop: "1px solid #000",
                      borderRight: "1px solid #000",
                      borderBottom: "2px solid #000",
                      borderLeft: "2px solid #000",
                      background: "#FFEEE1",
                    }}
                    type="text"
                    placeholder="Limit 50 letters"
                  ></input>
                </div>

                <div
                  className="addPicForm"
                  style={{ marginBottom: "20px", display: "flex" }}
                >
                  <label
                    style={{
                      width: "110px",
                      height: "35px",
                      borderRadius: "27px",
                      background: "#FD997F",
                      color: "#0F0C0C",
                      textAlign: "center",
                      fontSize: "17px",
                      fontStyle: "normal",
                      fontWeight: "600",
                      marginLeft: "40px",
                      paddingTop: "5px",
                    }}
                  >
                    Price
                  </label>
                  <input
                    style={{
                      width: "240px",
                      height: "35px",
                      paddingLeft: "15px",
                      paddingRight: "15px",
                      marginLeft: "25px",
                      borderRadius: "27px",
                      borderTop: "1px solid #000",
                      borderRight: "1px solid #000",
                      borderBottom: "2px solid #000",
                      borderLeft: "2px solid #000",
                      background: "#FFEEE1",
                    }}
                    type="text"
                  ></input>
                  {/*   leaf */}
                  <img
                    className="img-fluid"
                    src="http://drive.google.com/uc?export=view&id=1ZiBlvrC7bcBvaJwdNVErH4gZRbf_X7N4"
                    alt="img"
                    style={{
                      objectFit: "cover",
                      maxWidth: "35px",
                      marginLeft: "10px",
                    }}
                  />
                </div>

                <div className="addPicForm" style={{ marginBottom: "0px" }}>
                  <input type="radio" style={{ marginLeft: "40px" }}></input>
                  <label
                    style={{
                      width: "110px",
                      height: "35px",
                      borderRadius: "27px",
                      background: "#FD997F",
                      color: "#0F0C0C",
                      textAlign: "center",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: "600",
                      marginLeft: "6px",
                      paddingTop: "5px",
                    }}
                  >
                    Limit Amount
                  </label>
                  <input
                    style={{
                      width: "240px",
                      height: "35px",
                      paddingLeft: "15px",
                      paddingRight: "15px",
                      marginLeft: "25px",
                      borderRadius: "27px",
                      borderTop: "1px solid #000",
                      borderRight: "1px solid #000",
                      borderBottom: "2px solid #000",
                      borderLeft: "2px solid #000",
                      background: "#FFEEE1",
                    }}
                    type="text"
                  ></input>
                  <label
                    style={{
                      width: "3px",
                      height: "35px",
                      color: "#0F0C0C",
                      textAlign: "center",
                      fontSize: "20px",
                      fontStyle: "normal",
                      fontWeight: "600",
                      marginLeft: "6px",
                      paddingTop: "5px",
                    }}
                  >
                    pcs
                  </label>
                </div>

                {/*horizontal line */}
                <div
                  className="addPicForm"
                  style={{ marginBottom: "0px", display: "flex" }}
                >
                  <hr
                    style={{
                      width: "95%",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  ></hr>
                </div>
              </div>

              {/* sell body */}
              <div
                className="tab-pane fade"
                id="pills-auction"
                role="tabpanel"
                aria-labelledby="pills-auction-tab"
              >

                <input id="getimage" type="file" value="" className="filetype d-none " accept=".png, .jpeg" onChange={onImageChange} />
                <button
                  onClick={() => inputImage()}
                  className="uploadPicButton"
                  style={{
                    width: "415px",
                    height: "269px",
                    flexShrink: "0",
                    borderRadius: "45px",
                    background: "rgba(15, 12, 12, 0.14)",
                    margin: "20px 34px 20px 34px",
                    overflow: "hidden"
                  }}
                >
                  <img
                    className="img-fluid"
                    src={image}
                    alt="img"
                    style={{
                      objectFit: "cover",
                      maxWidth: width,
                      maxHeight: "269px",
                    }}
                  />

                </button>
                <div className="addPicForm" style={{ marginBottom: "20px" }}>
                  <label
                    style={{
                      width: "110px",
                      height: "35px",
                      borderRadius: "27px",
                      background: "#FD997F",
                      color: "#0F0C0C",
                      textAlign: "center",
                      fontSize: "17px",
                      fontStyle: "normal",
                      fontWeight: "600",
                      marginLeft: "40px",
                      paddingTop: "5px",
                    }}
                  >
                    Art title
                  </label>
                  <input
                    style={{
                      width: "275px",
                      height: "35px",
                      paddingLeft: "15px",
                      paddingRight: "15px",
                      marginLeft: "25px",
                      borderRadius: "27px",
                      borderTop: "1px solid #000",
                      borderRight: "1px solid #000",
                      borderBottom: "2px solid #000",
                      borderLeft: "2px solid #000",
                      background: "#FFEEE1",
                    }}
                    value={title}
                    onChange={(e) => settitle(e.target.value)}
                    type="text"
                    placeholder="Limit 50 letters"
                  ></input>
                </div>

                <div className="addPicForm" style={{ marginBottom: "20px" }}>
                  <label
                    style={{
                      width: "110px",
                      height: "35px",
                      borderRadius: "27px",
                      background: "#FD997F",
                      color: "#0F0C0C",
                      textAlign: "center",
                      fontSize: "17px",
                      fontStyle: "normal",
                      fontWeight: "600",
                      marginLeft: "40px",
                      paddingTop: "5px",
                    }}
                  >
                    Tag
                  </label>
                  <input
                    style={{
                      width: "275px",
                      height: "35px",
                      paddingLeft: "15px",
                      paddingRight: "15px",
                      marginLeft: "25px",
                      borderRadius: "27px",
                      borderTop: "1px solid #000",
                      borderRight: "1px solid #000",
                      borderBottom: "2px solid #000",
                      borderLeft: "2px solid #000",
                      background: "#FFEEE1",
                    }}
                    type="text"
                    value={tag}
                    onChange={(e) => settag(e.target.value)}
                    placeholder="Limit 50 letters"
                  ></input>
                </div>

                <div className="addPicForm" style={{ marginBottom: "20px" }}>
                  <label
                    style={{
                      width: "110px",
                      height: "35px",
                      borderRadius: "27px",
                      background: "#FD997F",
                      color: "#0F0C0C",
                      textAlign: "center",
                      fontSize: "17px",
                      fontStyle: "normal",
                      fontWeight: "600",
                      marginLeft: "40px",
                      paddingTop: "5px",
                    }}
                  >
                    Description
                  </label>
                  <input
                    style={{
                      width: "275px",
                      height: "113px",
                      paddingLeft: "15px",
                      paddingRight: "15px",
                      marginLeft: "25px",
                      borderRadius: "27px",
                      borderTop: "1px solid #000",
                      borderRight: "1px solid #000",
                      borderBottom: "2px solid #000",
                      borderLeft: "2px solid #000",
                      background: "#FFEEE1",
                    }}
                    value={desc}
                    onChange={(e) => setdesc(e.target.value)}
                    type="text"
                    placeholder="Limit 50 letters"
                  ></input>
                </div>

                <div
                  className="addPicForm"
                  style={{ marginBottom: "20px", display: "flex" }}
                >
                  <label
                    style={{
                      width: "110px",
                      height: "35px",
                      borderRadius: "27px",
                      background: "#FD997F",
                      color: "#0F0C0C",
                      textAlign: "center",
                      fontSize: "17px",
                      fontStyle: "normal",
                      fontWeight: "600",
                      marginLeft: "40px",
                      paddingTop: "5px",
                    }}
                  >
                    Start price
                  </label>
                  <input

                    style={{
                      width: "240px",
                      height: "35px",
                      paddingLeft: "15px",
                      paddingRight: "15px",
                      marginLeft: "25px",
                      borderRadius: "27px",
                      borderTop: "1px solid #000",
                      borderRight: "1px solid #000",
                      borderBottom: "2px solid #000",
                      borderLeft: "2px solid #000",
                      background: "#FFEEE1",
                    }}
                    type="number"
                    value={price}
                    onChange={(e) => setprice(e.target.value)}
                  ></input>
                  {/*   leaf */}
                  <img
                    className="img-fluid"
                    src="http://drive.google.com/uc?export=view&id=1ZiBlvrC7bcBvaJwdNVErH4gZRbf_X7N4"
                    alt="img"
                    style={{
                      objectFit: "cover",
                      maxWidth: "35px",
                      marginLeft: "10px",
                    }}
                  />
                </div>

                <div
                  className="addPicForm"
                  style={{ marginBottom: "20px", display: "flex" }}
                >
                  <label
                    style={{
                      width: "110px",
                      height: "35px",
                      borderRadius: "27px",
                      background: "#FD997F",
                      color: "#0F0C0C",
                      textAlign: "center",
                      fontSize: "15px",
                      fontStyle: "normal",
                      fontWeight: "600",
                      marginLeft: "40px",
                      paddingTop: "5px",
                    }}
                  >
                    Minimum bid
                  </label>
                  <input
                    style={{
                      width: "240px",
                      height: "35px",
                      paddingLeft: "15px",
                      paddingRight: "15px",
                      marginLeft: "25px",
                      borderRadius: "27px",
                      borderTop: "1px solid #000",
                      borderRight: "1px solid #000",
                      borderBottom: "2px solid #000",
                      borderLeft: "2px solid #000",
                      background: "#FFEEE1",
                    }}
                    type="number"
                    value={minimum}
                    onChange={(e) => setminimum(e.target.value)}
                  ></input>
                  {/*   leaf */}
                  <img
                    className="img-fluid"
                    src="http://drive.google.com/uc?export=view&id=1ZiBlvrC7bcBvaJwdNVErH4gZRbf_X7N4"
                    alt="img"
                    style={{
                      objectFit: "cover",
                      maxWidth: "35px",
                      marginLeft: "10px",
                    }}
                  />
                </div>

                <div className="addPicForm" style={{ marginBottom: "0px" }}>
                  <label
                    style={{
                      width: "100px",
                      height: "35px",
                      borderRadius: "27px",
                      background: "#FD997F",
                      color: "#0F0C0C",
                      textAlign: "center",
                      fontSize: "17px",
                      fontStyle: "normal",
                      fontWeight: "600",
                      marginLeft: "40px",
                      paddingTop: "5px",
                    }}
                  >
                    Date start
                  </label>
                  <input

                    style={{
                      width: "100px",
                      height: "35px",
                      paddingLeft: "15px",
                      paddingRight: "15px",
                      marginLeft: "7px",
                      borderRadius: "27px",
                      borderTop: "1px solid #000",
                      borderRight: "1px solid #000",
                      borderBottom: "2px solid #000",
                      borderLeft: "2px solid #000",
                      background: "#FFEEE1",
                      fontSize: "12px",
                    }}
                    value={startdate}
                    onChange={(e) => setstartdate(e.target.value)}
                    type="date"
                    placeholder="mm/dd/yyyy"
                  ></input>

                  <label
                    style={{
                      width: "100px",
                      height: "35px",
                      borderRadius: "27px",
                      background: "#FD997F",
                      color: "#0F0C0C",
                      textAlign: "center",
                      fontSize: "17px",
                      fontStyle: "normal",
                      fontWeight: "600",
                      marginLeft: "7px",
                      paddingTop: "5px",
                    }}
                  >
                    Date end
                  </label>
                  <input
                    style={{
                      width: "100px",
                      height: "35px",
                      paddingLeft: "15px",
                      paddingRight: "15px",
                      marginLeft: "7px",
                      borderRadius: "27px",
                      borderTop: "1px solid #000",
                      borderRight: "1px solid #000",
                      borderBottom: "2px solid #000",
                      borderLeft: "2px solid #000",
                      background: "#FFEEE1",
                      fontSize: "12px",
                    }}
                    value={enddate}
                    onChange={(e) => setenddate(e.target.value)}
                    type="date"
                    placeholder="mm/dd/yyyy"
                    required
                  ></input>
                </div>

                {/*horizontal line */}
                <div
                  className="addPicForm"
                  style={{ marginBottom: "0px", display: "flex" }}
                >
                  <hr
                    style={{
                      width: "95%",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  ></hr>
                </div>
                <div className="modal-footer-centered" style={{ height: "70px" }}>
                  <div className="text-center ">
                    <button
                      type="button"
                      className="btn"
                      onClick={handleSubmit}
                      style={{
                        backgroundImage:
                          "linear-gradient(to left, #F5C6F7 , #FF9C7D )",
                        border: "solid 2px #0F0C0C",
                        boxShadow: "2px 2px #0F0C0C",
                        borderRadius: "45px",
                        width: "100px",
                        marginTop: "8px",
                      }}
                    >
                      Publish
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div >
  )
}

function SideNav() {

  const { isLoggedin } = useLoginContext();


  useEffect(() => {
    const user = document.getElementById("profile")
    if (!isLoggedin.auth) user.style.display = "none"
    else if (isLoggedin.auth) user.style.display = "block"

  }, [isLoggedin.auth]);

  return (
    <div
      id="SideNavbar"
      className="my-3 container  d-flex flex-column align-items-center justify-content-center p-1 py-4"
    >
      <Circle
        image="https://cdn-icons-png.flaticon.com/512/747/747376.png"
        title="User"
        path="profile"
      />
      <Circle
        image="https://cdn-icons-png.flaticon.com/512/3144/3144456.png"
        title="Market"
        path="auction"
      />

      {/*-------- Modal Artwork -------- */}
      {/*button*/}
      <button
        type="button"
        className="btn"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        onClick={() => document.getElementById("pills-sell-tab").click()}
      >
        <div id="artwork" className="text-center ">
          <div
            id="Artwork"
            className="container-fluid rounded-circle border border-dark  p-3 d-flex justify-content-center border bgCircle"
          >
            <img
              className="img-fluid"
              src="https://cdn-icons-png.flaticon.com/512/10493/10493896.png"
              alt="img"
              style={{
                objectFit: "cover",
                maxWidth: "25px",
                radius: "45px",
                border: "1px solid #000",
              }}
            />
          </div>
          <p>Artwork</p>
        </div>
      </button>

      {/*in button*/}
      <ModalArtwork />

      <Circle
        image="https://cdn-icons-png.flaticon.com/512/6633/6633232.png"
        title="Trend"
        path="trend"
      />

      <div
        id="AlertNav"
        className="d-flex align-items-center flex-column rounded-pill py-1 mb-1"
      >
        <button
          type="button"
          className="btn border-0"
          data-bs-toggle="modal"
          data-bs-target="#noti"
        >
          <img
            className="img-fluid"
            src={noti}
            alt="img"
            style={{ objectFit: "cover", maxWidth: "20px" }}
          />
        </button>

        <button
          type="button"
          className="btn border-0"
          data-bs-toggle="modal"
          data-bs-target="#noti"
        >
          <img
            className="img-fluid"
            src={setting}
            alt="img"
            style={{ objectFit: "cover", maxWidth: "20px" }}
          />
        </button>

        <button
          type="button"
          className="btn border-0 pb-3"
          data-bs-toggle="modal"
          data-bs-target="#noti"
        >
          <img
            className="img-fluid"
            src={question}
            alt="img"
            style={{ objectFit: "cover", maxWidth: "20px" }}
          />
        </button>
      </div>

      <div
        className="modal fade"
        id="noti"
        tabIndex="-1"
        aria-labelledby="ModalNoti"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="ModalNoti">
                Notification
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body" style={{ minHeight: "500px" }}>
              ...
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default SideNav;
