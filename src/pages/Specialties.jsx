import React from "react";
import "@styles/global.css";
import "./specialties.css"; 
import TM1 from '@images/TM1.png'; 
import TM2 from '@images/TM2.png'; 
import TM3 from '@images/TM3.png'; 
import TM4 from '@images/TM4.png'; 
import TM5 from '@images/TM5.png'; 
import TM6 from '@images/TM6.png'; 

const Specialties = () => {
  return (
    <div>
      {/* Primera sección */}
      <div className="speciality-section">
        {/* Columna 1 */}
        <div className="speciality-column">
          <img src={TM1} alt="Speciality 1" />
          <p>Neurología</p>
        </div>
        {/* Columna 2 */}
        <div className="speciality-column">
          <img src={TM2} alt="Speciality 2" />
          <p>Neumología</p>
        </div>
        {/* Columna 3 */}
        <div className="speciality-column">
          <img src={TM3} alt="Speciality 3" />
          <p>Cardiología</p>
        </div>
      </div>
      {/* Segunda sección */}
      <div className="speciality-section">
        {/* Columna 1 */}
        <div className="speciality-column">
          <img src={TM4} alt="Speciality 4" />
          <p>Otorrinolaringología</p>
        </div>
        {/* Columna 2 */}
        <div className="speciality-column">
          <img src={TM5} alt="Speciality 5" />
          <p>Medicina Interna</p>
        </div>
        {/* Columna 3 */}
        <div className="speciality-column">
          <img src={TM6} alt="Speciality 6" />
          <p>Gastroenterología</p>
        </div>
      </div>
    </div>
  );
}

export default Specialties;