import React from "react";
import logo from "../../../public/react.svg";

const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
        <span>React UI</span>
      </div>

      <div className="search">
        <span>Search</span>
        <input type="search" />
      </div>

      <a
        href="https://github.com/ianSama0217/React-UI"
        target="blank"
        className="github-link"
      >
        <i className="fa-brands fa-github"></i>
      </a>
    </div>
  );
};

export default Navbar;
