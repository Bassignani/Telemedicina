import React, { useEffect, useState } from "react";
import "@styles/global.css";
import "./home.css";
import Banner from '@images/banner-medico.png';


const Home = () => {
  return (
    <div>
      {/* Sección superior */}
      <div className="top-section">
        {/* Columna izquierda */}
        <div className="left-column">
          <h2>Consulta Virtual</h2>
          <p>Conectando a pacientes con médicos, sin importar la distancia, a través de la telemedicina.</p>
          <p>Tu salud en línea, siempre al alcance de tu mano.</p>
        </div>
        {/* Columna derecha */}
        <div className="right-column">
          <img src={Banner} alt="Banner" />
        </div>
      </div>
      {/* Sección inferior */}
      <div className="bottom-section">
        <p>Conectamos pacientes con médicos por medio de videollamadas, whatsapp, llamadas telefonicas.</p>
      </div>
    </div>
  );
}

export default Home;