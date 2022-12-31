import { BsPlayFill } from "react-icons/bs";
import "../../stylesheet/works/projectOpenCard.css";
const ProjectOpenCard = ({
  open,
  close,
  imgCard,
  titleProject,
  technologyPj,
  technology2Pj,
  technology3Pj,
  anim,
}) => {
  return (
    <div
      className={
        open ? "project-open-container" : "project-open-container hidden"
      }
    >
      <div
        className={
          anim ? "container-project-card close-anim-card" : "container-project-card"
        }
      >
        <div
          className="close-card"
          onClick={() => {
            close();
          }}
        >
          x
        </div>

        {/* Imagen y titulo */}
        <div className="card-section-project">
          <div
            className="image-project"
            style={{
              backgroundImage: `url(${imgCard})`,
            }}
          ></div>
          <div className="inf-project-container">
            <div className="info-project-section">
              <div className="project-title-container">
                <span>{titleProject}</span>
              </div>
              <div className="project-controls-container">
                <span className="demo-button">
                  {" "}
                  <BsPlayFill size={25} />
                  Demo
                </span>
                <span className="repo-button">Repo</span>
              </div>
            </div>
          </div>
        </div>

        {/* descripcion y skills */}
        <div className="card-section-description-project">
          <div className="description-container-main">
            <div className="description-project">
              <span>Lorem ipsum dolor sit amet.</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Commodi, tempora sed suscipit fugit consequatur ipsa voluptatem
                odit, totam
              </p>
            </div>
            <div className="skills-project">
              <span>Tecnologías:</span>
              <br />
              {technologyPj} {technology2Pj}, {technology3Pj}.
            </div>
          </div>
        </div>
        <div className="description-project-container"></div>
      </div>
    </div>
  );
};

export default ProjectOpenCard;
