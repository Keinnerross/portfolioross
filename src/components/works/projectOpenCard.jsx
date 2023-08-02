import { BsPlayFill } from "react-icons/bs";
import "../../stylesheet/works/projectOpenCard.css";
const ProjectOpenCard = ({
  open,
  close,
  imgCard,
  titleProject,
  descriptionPj,
  technologyPj,
  technology2Pj,
  technology3Pj,
  anim,
  state,
  year,
  linkRepoOpen,
  linkDemoOpen,
}) => {
  //

  const handlePropagation = (e) => {
    const classDiv = e.target.className;
    if (classDiv == "project-open-container") {
      close();
    }
  };

  return (
    <div
      onClick={(e) => handlePropagation(e)}
      className={
        open ? "project-open-container" : "project-open-container hidden"
      }
    >
      <div
        className={
          anim
            ? "container-project-card close-anim-card"
            : "container-project-card"
        }
      >
        {/* Imagen y titulo */}
        <div className="card-section-project">
          <div
            className="close-card"
            onClick={() => {
              close();
            }}
          >
            <span>x</span>
          </div>
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
                <a href={linkDemoOpen} target="_blank">
                  <span className="demo-button">
                    <BsPlayFill size={25} />
                    Demo
                  </span>
                </a>
                <a href={linkRepoOpen} target="_blank">
                  <span className="repo-button">Repo</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* descripcion y skills */}
        <div className="card-section-description-project">
          <div className="description-container-main">
            <div className="description-project">
              <span>
                <span
                  className={state == "Finalizado" ? "finalizado" : "en-curso"}
                >
                  {state + " "}
                </span>
                <p className="year-pj">{year}</p>
              </span>
              <p>{descriptionPj}</p>
            </div>
            <div className="skills-project">
              <span>Tecnologías:</span> {technologyPj} {technology2Pj}
              {technology3Pj}.
            </div>
          </div>
        </div>
        <div className="description-project-container"></div>
      </div>
    </div>
  );
};

export default ProjectOpenCard;
