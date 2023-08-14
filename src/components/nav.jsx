import "../stylesheet/nav.css";
import LightMode from "./lightMode";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";
import NavServices from "./navServices";

const Nav = ({
  worksScroll,
  resourceScroll,
  aboutScroll,
  topScroll,
  handleLightMode,
  lightMode,
}) => {
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
    }, 400);

    if (value === true) {
      clearTimeout(closeTimer);
      setIsOpenService(true);
    }
  };

  /*Data LightMod */

  const lightModeTheme = {
    text: "#0d1117",
    bg: "rgb(240, 231, 219)",
    secundary: "#F5F0E8",
    // bg: "#f1faee",
    // secundary: "#dce2d9",
    green: "green",
  };

  const darkModeTheme = {
    text: "white",
    bg: "#0d1117",
    secundary: "#1C1E25",
    green: "greenyellow",
  };

  return (
    <>
      <div className="nav-mobile">
        <Link to="/portfolioross" onClick={topScroll()}>
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
                <LightMode
                  lightValue={lightModeTheme}
                  darkValue={darkModeTheme}
                  handleLightMode={handleLightMode}
                  lightMode={lightMode}
                />
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
              <Link
                to="/about"
                onClick={() => {
                  resourceScroll();
                  closeLateral();
                }}
              >
                <li>Recursos</li>
              </Link>

              <Link
                to="/about"
                onClick={() => {
                  aboutScroll();
                  closeLateral();
                }}
              >
                <li>Sobre mi</li>
              </Link>
            </ul>
            <Link
              to="/contact"
              onClick={() => {
                topScroll();
                closeLateral();
              }}
            >
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
                <LightMode
                  lightValue={lightModeTheme}
                  darkValue={darkModeTheme}
                  handleLightMode={handleLightMode}
                  lightMode={lightMode}
                />
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
                    isLightMode={lightMode}
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
