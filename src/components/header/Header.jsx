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
        <a href="/">Inicio</a>
        <a href="/specialties">Especialidades</a>
        <a href="/contact">Contacto</a>
      </div>
    </header>
  );
};

export default Header;