import "./Header.css";

function Header() {
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
      <button className="login-btn">Iniciar sesión</button>
    </header>
  );
}

export default Header;
