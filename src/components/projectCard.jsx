import "../stylesheet/projectCard.css";

const ProjectCard = ({ img, title, icon, technology }) => {
  return (
    <div className="box-work-main">
      <div className="img-project-container" style={{
        backgroundImage: `url(${img})`
      }}>
      </div>

      <div className="description-project-container">
        <h5>{title}</h5>
        <div className="technology-project-container">
          <span>{icon}</span>
          <p>{technology}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
