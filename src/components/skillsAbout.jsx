import "../stylesheet/skillsAbout.css";
import skillsDesign from "../images/main/skillsDesign.png";
import { BiGitPullRequest, BiLogoFirebase } from "react-icons/bi";
import { SiTailwindcss } from "react-icons/si";
import {
  SiReact,
  SiExpo,
  SiNodedotjs,
  SiExpress,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { DiMysql } from "react-icons/di";
import { Tilt } from "react-tilt";
import { useState } from "react";

const SkillsAbout = () => {
  const defaultOptions = {
    reverse: true, // reverse the tilt direction
    max: 20, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 500, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };

  const [exitAnim, setExitAnim] = useState(false);

  const handleExitAnimation = () => {
    setExitAnim(true);
    setTimeout(() => {
      setExitAnim(false);
    }, 500);
  };

  const iconConfig = {
    size: 18,
  };

  return (
    <div className="skillsContainer">
      <div className="skillsSection">
        <div className="skillsDesignContainer">
          <Tilt
            className={exitAnim ? " exitAnim" : "none"}
            onMouseLeave={() => handleExitAnimation()}
            options={defaultOptions}
          >
            <img className="skillsDesignImg scale-[1.1]" src={skillsDesign} alt="" />
          </Tilt>
        </div>
        <div className="skillsInfoContainer">
          <h5 className="purple-1">Desarrollo y Tecnologías</h5>
          <h4 className="font-bold text-[40px] md:text-[50px]">
            Stack completo <span>de desarrollo</span>
          </h4>
          <p>
            Cuento con habilidades en JavaScript, capaz de desarrollar
            aplicaciones completas tanto en el lado del cliente como en el lado
            del servidor. Además, tengo una sólida comprensión de la
            arquitectura de una aplicación y de cómo se integran todas las
            piezas.
          </p>
          <div className="skillsIconContainer">
            <div className="skills-list">
              <h3>Skills Tecnológicos</h3>
              <ul>
                <li>
                  <BiGitPullRequest size={iconConfig.size} />
                </li>

                <li>
                  <SiReact size={iconConfig.size} />
                </li>
                <li>
                  <TbBrandNextjs size={iconConfig.size} />
                </li>
                <li>
                  <SiTailwindcss size={iconConfig.size} />
                </li>
                <li>
                  <SiExpo size={iconConfig.size} />
                </li>

                <li>
                  <SiNodedotjs size={iconConfig.size} />
                </li>
                <li>
                  <SiExpress size={iconConfig.size} />
                </li>
                <li>
                  <DiMysql size={iconConfig.size} />
                </li>
                <li>
                  <BiLogoFirebase size={iconConfig.size} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsAbout;
