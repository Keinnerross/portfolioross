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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          eaque corrupti, placeat laudantium fugit eligendi nobis temporibus,
          eos explicabo laboriosam ex quam velit consequuntur repellendus minima
          quasi. Aut, illo nesciunt!
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
            <SiBootstrap />
          </li>
          <li>
            <SiSass />
          </li>
          <li>
            <DiJavascript />
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
        <h2>Otros</h2>
        <ul>
          <li>canva</li>
          <li>illustrator</li>
          <li>photoshop</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
