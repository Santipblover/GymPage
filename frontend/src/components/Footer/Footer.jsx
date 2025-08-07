import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section contact">
          <h3>Contacto</h3>
          <p>Email: SanGym@gmail.com</p>
          <p>Teléfono: +54 11 1234-5678</p>
          <p>Dirección: Calle Ficticia 123, Córdoba, Argentina</p>
        </div>
        <div className="footer-section links">
          <h3>Enlaces útiles</h3>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Servicios</a></li>
            <li><a href="#">Contacto</a></li>   
          </ul>
        </div>
        <div className="footer-section brand">
          <h3>GYM</h3>
          <p>&copy; {new Date().getFullYear()} SanGym. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;