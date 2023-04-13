import React, { useContext } from "react";
import "./Navbar.css";
import { AppContext } from "./Context";
import { Link ,useNavigate} from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(AppContext);
  return (
    <div className="navbar">
      <h2 className="h2">ReactContext</h2>
      <ul className="ul">
        <li className="li">
          <Link to="/">Home</Link>
        </li>
        <li className="li">
          <Link to="/profile">Profile</Link>
        </li>
        <li className="li">
          <Link to="/tech">Technologies</Link>
        </li>
        <li className="li">
          <Link to="/product">Product</Link>
        </li>
        <li className="li">
          <Link to="/contactus">Contact</Link>
        </li>
        <span>
          <button
            onClick={() => {
              setIsLoggedIn(false);
              navigate("/");
            }}
            className="btn"
          >
            Logout
          </button>
        </span>
      </ul>
    </div>
  );
};

export default Navbar;
