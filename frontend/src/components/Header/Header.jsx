import React, { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import "./Header.css";
import BurguerMenu from "./BurguerMenu";

function Header() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header className="header">
      <span className="sangym-logo-text">SanGym</span>
      
      <nav>
        <ul>
          <li>Inicio</li>
          <li>Arma tu rutina</li>
          <li>Contacto</li>
        </ul>
      </nav>
      <div className="header-controls">
        <button 
          className="dark-mode-toggle"
          onClick={toggleDarkMode}
          aria-label={darkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
        >
          {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>
        <button className="login-btn">Iniciar sesión</button>
        <BurguerMenu />
      </div>
    </header>
  );
}

export default Header;
