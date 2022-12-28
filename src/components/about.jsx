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
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br />
          <br />
          Architecto, eaque corrupti, placeat laudantium fugit eligendi nobis
          temporibus, eos explicabo laboriosam ex quam velit consequuntur
          repellendus minima quasi. Aut, illo nesciunt! Lorem ipsum, dolor sit
          amet consectetur adipisicing elit. Quos recusandae sit saepe inventore
          expedita architecto repellat, ad quo dolor alias nesciunt quas
          excepturi? Assumenda autem perferendis optio accusantium quo ullam?
          <br />
        </p>
      </div>

      <div className="skills-list">
        <h2>Skills Tecnológicos</h2>
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
          <h3>Otros</h3>
          <ul className="list-others">
            <li>figma</li>
            <li>express</li>
            <li>mysql</li>
            <li>divi</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
