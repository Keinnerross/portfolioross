import "../stylesheet/nav.css";
import { Link } from "react-router-dom";
import { BsFillSunFill } from "react-icons/bs";

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
            <li><BsFillSunFill/></li>
            <Link to="/trabajos">
              <li>Trabajos</li>
            </Link>
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
