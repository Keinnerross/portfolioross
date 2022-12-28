import ProjectCard from "./projectCard";
import "../../stylesheet/works/works.css";
import {
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiSass,
  SiWebpack,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
} from "react-icons/si";
import { DiJavascript, DiNpm } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";

const Works = () => {
  return (
    <div id="trabajos" className="works-container">
      <div className="works-content-container">
        <div className="nav-works">
          <h4>Trabajos</h4>
          <select>
            <option value="React">React</option>
            <option value="Node" selected>
              Node
            </option>
            <option value="vNext">Value 3</option>
          </select>
        </div>

        <div className="box-works-container">
          <ProjectCard
            title="Spartan Pomodoro"
            description="App mejorar la gestión del tiempo focalizado a una actividad usando el metodo pomodoro."
            icon={<SiReact />}
            technology="React.js"
            img="https://www.jsmastery.pro/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmovie.3bed4872.png&w=3840&q=75"
          />

          <ProjectCard
            title="Link in Bio"
            description="Menú personalizado dónde están todos los links a redes sociales, website, etc..."
            icon={<TbBrandNextjs />}
            technology="Next.js"
            img="https://elementor.com/marketing/wp-content/uploads/sites/9/2020/07/Create-a-Link-in-Instagram-Bio_External.png"
          />
        </div>
        <div className="box-works-container">
          <ProjectCard
            title="SoloGomas Website"
            description="Sitio web corporativo diseñado para enseñar productos y brindar información a los clientes"
            icon={<TbBrandNextjs />}
            technology="Next.js"
            img="https://scontent.fscl12-1.fna.fbcdn.net/v/t39.30808-6/295067382_2878054549155500_1633167168815247920_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=e3f864&_nc_ohc=0kMWG2IGT2gAX_4np7v&_nc_ht=scontent.fscl12-1.fna&oh=00_AfBW7HX-1TqjxO6QYu2Qa6cPn7CpGFu0Uue6nkgEDgXjiQ&oe=63AFED02"
          />
          <ProjectCard
            title="SoloGomas Belts.app"
            description="Sistema de control de inventario, construcción de api y base de datos más consumo."
            icon={<SiNodedotjs />}
            technology="Node"
            img="https://github.blog/wp-content/uploads/2021/12/GitHub-code-search_banner.png?fit=1200%2C630"
          />
        </div>
        <div className="box-works-container">
          <ProjectCard
            title="Ninja Tap"
            description="Juego de medir tu velocidad de clicks/taps contra reloj, ¡divertido y adictivo!"
            icon={<SiReact />}
            technology="React Native"
            img="https://www.spyninjanetwork.com/img/icon-logo.png"
          />

          <ProjectCard
            title="Human Picture"
            description="App dónde puedes practicar el dibujo de poses humanas con temporizador, útil para artistas y estudiantes de arte."
            icon={<SiReact />}
            technology="React Native"
            img="https://i.etsystatic.com/10028242/r/il/abb3b4/1473116200/il_fullxfull.1473116200_qei2.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Works;
