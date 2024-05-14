import React from 'react';
import "./footer.css";
import Logo from '@logos/Logo_TM1.png';

const Footer = () => {
  return (
    <footer>
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="center">
        <p >By LimayDev</p>
       
      </div>
    </footer>
  );
};

export default Footer;

