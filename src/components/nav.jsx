import "../stylesheet/nav.css";
import LightMode from "./lightMode";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div className="nav-container">
        <Link to="/">
          <div className="logo">
            <span className="img-me"></span>
            <span className="logotype">KeinnerRoss</span>
          </div>
        </Link>

        <div className="routes-section">
          <ul className="ul-nav">
            <li>
              <LightMode />
            </li>
            <a href="/#trabajos">
              <li>Trabajos</li>
            </a>
            <li>Cursos</li>
            <Link to="/about">
              <li>Sobre mi</li>
            </Link>
          </ul>
          <Link to="/contacto">
            <div className="button-cv-container">
              <div className="button-cv">
                <span>Contáctame</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
