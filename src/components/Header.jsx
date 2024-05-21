import React from "react";
import "@styles/header.css";
import Logo from '@logos/Logo_TM1.png';

const Header = () => {
  return (
    <header className="header">
      <div className="navbar-left">
          <img src={Logo} alt="Logo" className="logo"/>
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="/specialties">Especialidades</a></li>
          <li><a href="/contact">Contacto</a></li>
        </ul>
      </div>
      <div className="navbar-right">

      </div>
    </header>
  );
};

export default Header;



{/* <header className="header">
<div className="logo">
  <img src={Logo} alt="Logo" />
</div>
<div className="center">
  <a href="/">Inicio</a>
  <a href="/specialties">Especialidades</a>
  <a href="/contact">Contacto</a>
</div>
</header> */}