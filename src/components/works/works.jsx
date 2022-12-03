import ProjectCard from "./projectCard";
import "../../stylesheet/works/works.css";

const Works = () => {
  return (
    <div className="works-container">
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
            description="Soy la descripcion pq ajá."
            icon="x"
            technology="React.js"
            img="https://www.jsmastery.pro/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmovie.3bed4872.png&w=3840&q=75"
          />

          <ProjectCard
            title="Link in Bio"
            description="Soy la descripcion pq ajá."
            icon="x"
            technology="Next.js"
            img="https://elementor.com/marketing/wp-content/uploads/sites/9/2020/07/Create-a-Link-in-Instagram-Bio_External.png"
          />
        </div>
        <div className="box-works-container">
          <ProjectCard
            title="Spartan Pomodoro"
            icon="x"
            technology="React.js"
            img="https://www.jsmastery.pro/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmovie.3bed4872.png&w=3840&q=75"
          />
          <ProjectCard
            title="SoloGomas-Belts.app"
            icon="x"
            technology="Javascript"
            img="https://github.blog/wp-content/uploads/2021/12/GitHub-code-search_banner.png?fit=1200%2C630"
          />
        </div>
        <div className="box-works-container">
          <ProjectCard
            title="Utopy Simulator"
            icon="x"
            technology="procesing.js"
            img="https://dmishin.github.io/images/minkovski-ca.png"
          />

          <ProjectCard
            title="JaxConstruction Page"
            icon="x"
            technology="Js"
            img="https://pbs.twimg.com/media/E0z1zV6XoAQ5kr6?format=png&name=large"
          />
        </div>
      </div>
    </div>
  );
};

export default Works;
