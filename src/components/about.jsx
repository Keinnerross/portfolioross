import "../stylesheet/about.css";
import {
  SlSocialLinkedin,
  SlSocialInstagram,
  SlSocialYoutube,
} from "react-icons/sl";

import { VscGithubAlt } from "react-icons/vsc";
import { Link } from "react-router-dom";
import mePicture from "../images/meAboutPicture.jpg";
const About = ({ aboutRefProp, worksScroll, topScroll }) => {
  const iconConfig = {
    size: 18,
  };

  return (
    <div className="aboutContainer" id="about" ref={aboutRefProp}>
      <div className="aboutSection">
        <div className="aboutMePictureContainer">
          <div
            className="aboutMePicture"
            style={{ backgroundImage: `url(${mePicture})` }}
          >
            {/* " */}
          </div>
        </div>

        <div className="aboutInfoContainer">
          <h2>Keinner Ross</h2>
          <h3>Fullstack with JS</h3>
          <div className="availableContainer">
            <div className="dotAvailable"></div>
            <span>Disponible para Trabajo</span>
          </div>
          <div className="socialButtons">
            <a
              href="https://www.linkedin.com/in/keinner-ross-durantt-28bb231b5/"
              target="_blank"
            >
              <SlSocialLinkedin size={iconConfig.size} />
            </a>
            <a href="https://github.com/Keinnerross/" target="_blank">
              <VscGithubAlt size={iconConfig.size} />
            </a>
            <a href="https://www.instagram.com/keinnerross/" target="_blank">
              <SlSocialInstagram size={iconConfig.size} />
            </a>

            {/* <a href="https://www.youtube.com/@keinnerross.6223" target="_blank">
              <SlSocialYoutube size={iconConfig.size} />
            </a> */}
          </div>
          <div className="text-sm">

          <p>
            Soy Keinner Ross, un apasionado desarrollador de 26 años con base en Chile desde 2020. Mi viaje por la tecnología comenzó en Venezuela, donde estudiaba Ingeniería Informática, pero debido a las difíciles circunstancias del país, tomé la decisión de migrar antes de concluir mi educación. Desde 2019, me he dedicado a la educación autodidacta estudiando en Platzi <a  className="text-[#218ffe] font-bold" href="https://platzi.com/p/keinnerross/ruta/100-javascript-full-stack/diploma/detalle/" target="_blank" rel="noreferrer">(Ver diploma)</a>  y otras plataformas en línea, enfocándome en desarrollo web y diseño.</p>
          <p>
            Mi camino laboral comenzó junto a la búsqueda de conocimiento, convirtiendo mi pasión por la tecnología en una carrera como freelancer. Esta experiencia me ha dado una perspectiva única sobre la intersección entre la tecnología y el negocio, además de fortalecer mis habilidades en resolución de problemas.  </p>
          <p>
            Actualmente, me emociona asumir nuevos retos que ayuden a mi crecimiento como desarrollador. Mi pasión por la tecnología se combina con intereses en música, historia, desarrollo sostenible y geopolítica.
          </p>
          </div>

          <div className="ButtonsContainer">
            <Link to="/contact" onClick={() => topScroll()}>
              <button
                className="buttonPrimary
"
              >
                Envíar Mensaje
              </button>
            </Link>
            <Link to="/portfolioross" onClick={() => worksScroll()}>
              <button className="buttonSecundary">Trabajos</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

