import "../../stylesheet/works/projectCard.css";

const ProjectCard = ({
  img,
  title,
  description,
  icon,
  technology,
  icon2,
  technology2,
}) => {
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
        <p></p> {description}
        <div className="tech-project-container">
          {icon} {technology} {icon2} {technology2}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
