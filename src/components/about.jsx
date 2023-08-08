import "../stylesheet/about.css";
import {
  SlSocialLinkedin,
  SlSocialInstagram,
  SlSocialYoutube,
} from "react-icons/sl";

import { VscGithubAlt } from "react-icons/vsc";

const About = () => {
  const iconConfig = {
    size: 18,
  };

  return (
    <div className="aboutContainer">
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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Praesentium facere dignissimos nemo, provident voluptate earum,
            facilis in dolorum, unde blanditiis autem sapiente repellendus sint
            repudiandae quo cumque laborum. Dolorem, laborum?
          </p>
          <div className="ButtonsContainer">
            <button
              className="buttonPrimary
"
            >
              Envíar Mensaje
            </button>
            <button className="buttonSecundary">Trabajos</button>
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
