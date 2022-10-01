import "../stylesheet/skills.css";
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

const Skills = () => {
  return (
    <div className="skills-container">
      <div className="skills-content-container">
        <div className="info-skills-container">
          <h4>Skills</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            eaque corrupti, placeat laudantium fugit eligendi nobis temporibus,
            eos explicabo laboriosam ex quam velit consequuntur repellendus
            minima quasi. Aut, illo nesciunt!
          </p>
          <div className="skills-list">
            <ul>
              <li>
                <SiHtml5 />
                <span>Html</span>
              </li>
              <li>
                <SiCss3 />
                <span>Css</span>
              </li>
              <li>
                <SiBootstrap />
                <span>Bootstrap</span>
              </li>
              <li>
                <SiSass />
                <span>Sass</span>
              </li>
              <li>
                <DiJavascript />
                <span>Javascript</span>
              </li>
            </ul>
            <ul>
              <li>
                <DiNpm />
                <span>Npm</span>
              </li>
              <li>
                <SiWebpack />
                <span>Webpack</span>
              </li>
              <li>
                <SiReact />
                <span>React</span>
              </li>
              <li>
                <TbBrandNextjs />
                <span>Next.js</span>
              </li>
              <li>
                <SiNodedotjs />
                <span>Node</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="torch-container">
          <div className="svg-torch"></div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
