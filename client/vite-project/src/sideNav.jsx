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
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
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
