import * as React from "react";
import { Link } from "react-router-dom";
// import logo from '../../../images/logo.png';
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img
          src="http://inside.auto1-group.com/wp-content/uploads/2019/05/AUTO1_Group_Logo_RGB_NEW_mini.png"
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