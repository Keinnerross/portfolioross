import "../stylesheet/nav.css";
import LightMode from "./lightMode";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";
import NavServices from "./navServices";

const Nav = ({ worksScroll, resourceScroll, aboutScroll, topScroll }) => {
  const [lateralMenu, setLateralMenu] = useState(false);
  const [animationClose, setAnimationClose] = useState(false);
  const [isOpenService, setIsOpenService] = useState(false);

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

  const handleOpenService = (value) => {
    let closeTimer = setTimeout(() => {
      setIsOpenService(false);
      console.log("mejecute");
    }, 400);

    if (value === true) {
      clearTimeout(closeTimer);
      setIsOpenService(true);
    }

    console.log(value);
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
                  worksScroll();
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
            <Link to="/contact" onClick={() => closeLateral()}>
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
          <Link to="/portfolioross" onClick={() => topScroll()}>
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
              <Link to="#">
                <li
                  className="serviceContainer"
                  onMouseEnter={() => handleOpenService(true)}
                >
                  <div
                    className="serviceDiv"
                    onClick={() => setIsOpenService(false)}
                  >
                    Servicios <MdOutlineKeyboardArrowDown />
                  </div>
                  <NavServices
                    isOpen={isOpenService}
                    handleOpen={handleOpenService}
                  />
                </li>
              </Link>

              <Link to="/portfolioross" onClick={() => worksScroll()}>
                <li>Trabajos</li>
              </Link>
              <Link
                to="/about"
                onClick={() => {
                  resourceScroll();
                }}
              >
                <li>Recursos</li>
              </Link>

              <Link
                to="/about"
                onClick={() => {
                  aboutScroll();
                }}
              >
                <li>Sobre mi</li>
              </Link>
            </ul>
            <Link to="/contact" onClick={() => topScroll()}>
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
