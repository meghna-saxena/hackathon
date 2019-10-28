import * as React from "react";
import { Link } from "react-router-dom";
import logo from '../../../images/logo.png';
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img
          src={logo}
          className="company-logo"
          alt="logo"
        />
      </Link>
      {/* <span
        style={{
          color: "orange",
          marginRight: "50px",
          textAlign: "right",
          display: "block"
        }}
      >
        Logout
      </span> */}
    </div>
  );
};

export default Header;