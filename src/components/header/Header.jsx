import React from "react";
import "./header.css";
import Logo from '@logos/Logo_TM1.png';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="center">
        <a href="/">Home</a>
        <a href="/contact">Contact</a>
      </div>
    </header>
  );
};

export default Header;