import React from 'react';
import "@styles/footer.css";
import Logo from '@logos/Logo_TM1.png';

const Footer = () => {
  return (
    <footer>
      <div className="logo">
        <img src={Logo} alt="Logo" className='logo'/>
      </div>
      <div className="center">
        <p><a href="https://limaydev.com.ar" target='blanck'>By LimayDev</a></p>
      </div>
    </footer>
  );
};

export default Footer;

