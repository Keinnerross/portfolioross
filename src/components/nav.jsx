import "../stylesheet/nav.css";
import LightMode from "./lightMode";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const Nav = ({ workRefRecive }) => {
  const [lateralMenu, setLateralMenu] = useState(false);
  const [animationClose, setAnimationClose] = useState(false);

  const toggleLateral = () => {
    setLateralMenu(!lateralMenu);
  };

  const closeLateral = () => {
    setAnimationClose(true);
    setTimeout(() => {
      setLateralMenu(false);
      setAnimationClose(false);
    }, 440);
  };

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
        <Link to="/portfolioross">
          <div className="logo">
            <span className="img-me"></span>
            <span className="logotype">KeinnerRoss</span>
          </div>
        </Link>
        <div className="buger-menu" onClick={() => toggleLateral()}>
          <RxHamburgerMenu size={28} />
        </div>
      </div>
      <div
        className={
          lateralMenu
            ? "lateral-menu-container"
            : "lateral-menu-container hidden"
        }
      >
        <div
          className={
            animationClose ? "lateral-menu close-anim" : " lateral-menu "
          }
        >
          <div className="close-lateral" onClick={() => closeLateral()}>
            x
          </div>
          <div className="content-lateral-nav">
            <ul>
              <li>
                <LightMode />
              </li>
              <Link
                to="/portfolioross"
                onClick={() => {
                  timerScroll();
                  closeLateral();
                }}
              >
                <li>Trabajos</li>
              </Link>

              <li>Cursos</li>
              <Link to="/about" onClick={() => closeLateral()}>
                <li>Sobre mi</li>
              </Link>
            </ul>
            <Link to="/contacto" onClick={() => closeLateral()}>
              <div className="button-cv-container">
                <div className="button-cv lateral-top">
                  <span>Contáctame</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <nav id="nav">
        <div className="nav-container">
          <Link to="/portfolioross">
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
              <Link to="/portfolioross" onClick={() => timerScroll()}>
                <li>Trabajos</li>
              </Link>

              <li>Blog</li>
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
