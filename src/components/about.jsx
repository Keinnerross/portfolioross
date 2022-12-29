import "../stylesheet/about.css";
import {
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiSass,
  SiWebpack,
  SiReact,
  SiNodedotjs,
} from "react-icons/si";
import { DiJavascript, DiNpm } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";

const About = () => {
  return (
    <div className="skills-container">
      <div className="skills-content-container">
        <h2>
          Tus proyectos al siguiente nivel con{" "}
          <span className="purple-1">JavaScript:</span>{" "}
        </h2>
        <span>
          Soy un programador full stack con habilidades en JavaScript, capaz de
          desarrollar aplicaciones web completas tanto en el lado del cliente
          como en el lado del servidor. Tengo experiencia en HTML, CSS y
          JavaScript para el <span className="purple-1">front-end</span>, así
          como en Node.js y bases de datos para el{" "}
          <span className="purple-1">back-end.</span> Además, tengo una sólida
          comprensión de la arquitectura de la aplicación y cómo se integran
          todas las piezas. En resumen, soy un experto en todas las capas de una
          aplicación web y estoy capacitado para trabajar de manera eficiente en
          cada una de ellas.
        </span>
      </div>

      <div className="skills-list">
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
      </div>
    </div>
  );
};

export default About;
