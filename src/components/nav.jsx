import "../stylesheet/nav.css";
import LightMode from "./lightMode";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";
import NavServices from "./navServices";

const Nav = ({ workRefRecive, resRefRecive, aboutRefRecive }) => {
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

  const timerScroll = () => {
    setTimeout(() => {
      workRefRecive.current.scrollIntoView({
        scrollBehavior: "smooth",
      });
    }, 300);
  };

  const timerScrollResources = () => {
    setTimeout(() => {
      resRefRecive.current.scrollIntoView({
        scrollBehavior: "smooth",
      });
    }, 400);
  };

  const timerScrollAbout = () => {
    setTimeout(() => {
      aboutRefRecive.current.scrollIntoView({
        scrollBehavior: "smooth",
      });
    }, 400);
  };

  const handleOpenService = () => {
    setTimeout(() => {
      setIsOpenService(false);
    }, 400);
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
              <Link to="#">
                <li
                  className="serviceContainer"
                  onMouseEnter={() => setIsOpenService(true)}
                >
                  <div>
                    Servicios <MdOutlineKeyboardArrowDown />
                  </div>
                  <NavServices
                    isOpen={isOpenService}
                    handleOpen={handleOpenService}
                  />
                </li>
              </Link>

              <Link to="/portfolioross" onClick={() => timerScroll()}>
                <li>Trabajos</li>
              </Link>
              <Link
                to="/about"
                onClick={() => {
                  timerScrollResources();
                }}
              >
                <li>Recursos</li>
              </Link>

              <Link
                to="/about"
                onClick={() => {
                  timerScrollAbout();
                }}
              >
                <li>Sobre mi</li>
              </Link>
            </ul>
            <Link to="/contact">
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
