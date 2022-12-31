import "../stylesheet/nav.css";
import LightMode from "./lightMode";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

const Nav = ({ workRefRecive }) => {
  const timerScroll = () => {
    setTimeout(() => {
      workRefRecive.current.scrollIntoView({
        scrollBehavior: "smooth",
      });
    }, 300);
  };

  return (
    <>
      <div className="nav-mobile">
        <Link to="/">
          <div className="logo">
            <span className="img-me"></span>
            <span className="logotype">KeinnerRoss</span>
          </div>
        </Link>
        <div className="buger-menu">
          <RxHamburgerMenu size={28}/>
        </div>
      </div>
      <nav id="nav">
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
              <Link to="/" onClick={() => timerScroll()}>
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
    </>
  );
};

export default Nav;
