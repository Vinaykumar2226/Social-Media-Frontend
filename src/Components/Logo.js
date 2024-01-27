import React from "react";
import logo from "../Images/logo.png";
import "./Logo.css";
const Logo = () => {
  return (
    <div className="main">
      <img src={logo} width={"500px"} className="image" />
    </div>
  );
};

export default Logo;
