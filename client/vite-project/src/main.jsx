import ReactDOM from "react-dom/client";
import "./index.css";

//Import pages
import App from "./App.jsx";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Market from "./pages/Market";
import Artwork from "./pages/Artwork";
import Trend from "./pages/Trend";

//Imported by WoraPhet
import TestLoginModal from './pages/TestLoginModal'
import AuctionDetail from './pages/AuctionDetail'

//Import navigation bar and side navigation bar
import Navigation from "./navigation";
import SideNav from "./sideNav";

import { BrowserRouter, createBrowserRouter } from "react-router-dom";
import { LoginContextProvider } from "./context/loginContext";
import { AuctionRoomContextProvider } from "./context/auctionRoomContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    /*Remain Task: if not login can not go to home */
  },
  {
    path: "/home/:username",
    element: <Home />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/purchase",
    element: <Market />,
  },
  {
    path: "/auction",
    element: <Market />,
  },
  {
    path: "/artwork",
    element: <Artwork />,
  },
  {
    path: "/trend",
    element: <Trend />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <LoginContextProvider>
        <Navigation />
        <div className="container-fluid">
          <div className="row">
            <div className="col-1 d-flex align-items-center">
              <SideNav />
            </div>
            <AuctionRoomContextProvider>
              <App />
            </AuctionRoomContextProvider>

          </div>
        </div>
      </LoginContextProvider>
    </BrowserRouter>
  </>
);
