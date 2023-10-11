import { useEffect } from "react";

function Circle(data) {
  return (
    <div className="text-center">
      <a href={"/" + data.path}>
        <div
          className="container-fluid rounded-circle border border-dark my-1 p-3 d-flex justify-content-center border"
          id="bgCircle"
        >
          <img
            className="img-fluid"
            src={data.image}
            alt="img"
            style={{ objectFit: "cover", maxWidth: "25px" }}
          />
        </div>
      </a>
      <p>{data.title}</p>
    </div>
  );
}

function SideNav() {
  useEffect(() => {}, []);
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
        path="market/auction"
      />

      {/*-------- Modal Artwork -------- */}
      {/*button*/}
      <button
        type="button"
        className="btn"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <div className="text-center">
          <div
            className="container-fluid rounded-circle border border-dark my-1 p-3 d-flex justify-content-center border"
            id="bgCircle"
          >
            <img
              className="img-fluid"
              src="https://cdn-icons-png.flaticon.com/512/10493/10493896.png"
              alt="img"
              style={{ objectFit: "cover", maxWidth: "25px" }}
            />
          </div>
          <p>Artwork</p>
        </div>
      </button>

      {/*in button*/}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel"></h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <ul className="nav justify-content-evenly">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="pills-sell-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-sell"
                    type="button"
                    role="tab"
                    aria-controls="pills-sell"
                    aria-selected="true"
                  >
                    Sell
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-auction-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-auction"
                    type="button"
                    role="tab"
                    aria-controls="pills-auction"
                    aria-selected="false"
                  >
                    Auction
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-sell"
                  role="tabpanel"
                  aria-labelledby="pills-sell-tab"
                >
                  aaaaaaaaaaaaaa
                  <img
                    src="https://i.pinimg.com/564x/1c/c2/40/1cc2408849475c4fe0963566ad520fea.jpg"
                    className="rounded mx-auto d-block"
                    alt="img"
                  ></img>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-auction"
                  role="tabpanel"
                  aria-labelledby="pills-auction-tab"
                >
                  bbbbbbbbbb
                  <form className="d-flex ">
                    <input
                      className="form-control me-2 rounded-pill border-0 nosubmit"
                      type="search"
                      id="Searchbar"
                      name="Searchbar"
                      placeholder="Search..."
                      aria-label="Search"
                    />
                    <button
                      id="btn-Search"
                      className="btn rounded-pill px-4"
                      type="submit"
                    >
                      Search
                    </button>
                  </form>
                </div>
              </div>
              a b c content to show the scrolling behavior for modals. We use
              repeated line breaks to demonstrate how content can exceed minimum
              inner height, thereby showing inner scrolling. When content
              becomes longer than the prefedined max-height of modal, content
              will be cropped and scrollable within the modal. This content
              should appear at the bottom after you scroll a b c content to show
              the scrolling behavior for modals. We use repeated line breaks to
              demonstrate how content can exceed minimum inner height, thereby
              showing inner scrolling. When content becomes longer than the
              prefedined max-height of modal, content will be cropped and
              scrollable within the modal. This content should appear at the
              bottom after you scroll a b c content to show the scrolling
              behavior for modals. We use repeated line breaks to demonstrate
              how content can exceed minimum inner height, thereby showing inner
              scrolling. When content becomes longer than the prefedined
              max-height of modal, content will be cropped and scrollable within
              the modal. This content should appear at the bottom after you
              scroll
            </div>

            
            <div className="modal-footer-centered">

            <div className="text-center">
              <button
                type="button"
                className="btn btn-dark"
                data-bs-dismiss="modal"
              >
                Publish
              </button>
            </div>
              
            
            </div>
            

          </div>
        </div>
      </div>

      <Circle
        image="https://cdn-icons-png.flaticon.com/512/6633/6633232.png"
        title="Trend"
        path="trend"
      />
      <div id="AlertNav" className="rounded-pill px-4 py-2 mt-5 mb-4">
        alert
      </div>
    </div>
  );
}

export default SideNav;
