import React from "react";

const Contact = () => {
  return (
    <div>
      <h2>Contános</h2>
      <p>Por favor complete el formulario que se encuentra a continuación</p>
      <form>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="message">Mensaje:</label>
          <textarea id="message" name="message" rows="4" />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contact;