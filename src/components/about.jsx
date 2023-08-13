import "../stylesheet/about.css";
import {
  SlSocialLinkedin,
  SlSocialInstagram,
  SlSocialYoutube,
} from "react-icons/sl";

import { VscGithubAlt } from "react-icons/vsc";
import { Link } from "react-router-dom";

const About = ({ aboutRefProp, worksScroll, topScroll }) => {
  const iconConfig = {
    size: 18,
  };

  return (
    <div className="aboutContainer" id="about" ref={aboutRefProp}>
      <div className="aboutSection">
        <div className="aboutMePictureContainer">
          <div className="aboutMePicture">{/* " */}</div>
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

            <a href="https://www.youtube.com/@keinnerross.6223" target="_blank">
              <SlSocialYoutube size={iconConfig.size} />
            </a>
          </div>
          <p>
            ¡Saludos! Soy Keinner Ross, un apasionado desarrollador de 25 años
            con base en Chile desde 2020.
          </p>

          <p>
            Mi viaje por la tecnología comenzó en Venezuela, donde estudiaba
            Ingeniería Informática. Sin embargo, las difíciles circunstancias
            que atravesaba el país en ese momento me llevaron a tomar la difícil
            decisión de migrar antes de concluir mi educación. Desde 2019, he
            estado dedicado a la educación autodidacta en Platzi y otras
            plataformas en línea, enfocándome en desarrollo web y diseño.
          </p>
          <p>
            Mi camino en el mundo laboral dio inicio al mismo tiempo que mi
            búsqueda de conocimiento. Convertí mi pasión por la tecnología en
            una carrera como freelancer, Esta experiencia me ha brindado una
            perspectiva única en la intersección entre la tecnología y el
            negocio de la industria, además de fortalecer mis habilidades en
            resolución de problemas.
          </p>

          <p>
            Actualmente, estoy emocionado por asumir nuevos retos que me ayuden
            a crecer como desarrollador. Mi pasión por la tecnología se combina
            con intereses en música, historia, desarrollo sostenible y
            geopolítica. Me defino como un Desarrollador Full Stack
            especializado en Javascript, ansioso por contribuir con soluciones
            innovadoras y aprender en un entorno de desarrollo continuo.
          </p>
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

{
  /* <h2>
          Tus proyectos al siguiente nivel con{" "}
          <span className="purple-1">JavaScript:</span>{" "}
        </h2>
        <p>
          Soy un programador full stack con habilidades en JavaScript, capaz de
          desarrollar aplicaciones web completas tanto en el lado del cliente
          como en el lado del servidor. Tengo experiencia en HTML, CSS y JavaScript para el <span className="purple-1">front-end</span>, así como en Node.js y bases de datos para el <span className="purple-1">back-end.</span> Además, tengo una sólida
          comprensión de la arquitectura de la aplicación y cómo se integran
          todas las piezas. En resumen, soy un experto en todas las capas de una
          aplicación web y estoy capacitado para trabajar de manera eficiente en
          cada una de ellas.
        </p> */
}

{
  /* <div className="skills-list">
        <h3>Skills Tecnológicos</h3>
        <ul>
          <li>
            <SiHtml5 />
          </li>
          <li>
            <SiCss3 />
          </li>
          <li>
            <DiJavascript />
          </li>
          <li>
            <SiBootstrap />
          </li>
          <li>
            <SiSass />
          </li>
          <li>
            <DiNpm />
          </li>
          <li>
            <SiWebpack />
          </li>
          <li>
            <SiReact />
          </li>
          <li>
            <TbBrandNextjs />
          </li>
          <li>
            <SiNodedotjs />
          </li>
        </ul>
        <div className="list-others-container">
          <h4>Otros</h4>
          <ul className="list-others">
            <li>Figma</li>
            <li>Express</li>
            <li>React Native</li>
            <li>Mysql</li>
            <li>Divi</li>
          </ul>
        </div>
      </div> */
}
