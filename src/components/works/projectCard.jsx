import "../../stylesheet/works/projectCard.css";

const ProjectCard = ({ img, title, description, icon, technology }) => {
  return (
    <div className="box-work-main">
      <div
        className="img-project-container"
        style={{
          backgroundImage: `url(${img})`,
        }}
      ></div>
      <div className="info-project-container">
        <h3>{title}</h3>
        <p>{description}</p> 
        <div className="tech-project-container">
          {icon}
          {technology}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
