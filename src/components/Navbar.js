import React from "react";
import "./Navbar.css";
import Logo from "../logo.png";

const Navbar = () => {
  const abc = () => {};
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={Logo} alt="company-logo" />
      </div>
      {/* <div className="navbar-brand">accredian</div> */}
      <select name="billingState" onChange={abc} required>
        <option value="Courses"> Courses </option>
      </select>
      <ul className="navbar-links">
        <li>
          <a href="#">Refer & Earn</a>
        </li>
        <li>
          <a href="#">Resources</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#" className="login">
            Login
          </a>
        </li>
        <li>
          <a href="#" className="try-free">
            Try for free
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
