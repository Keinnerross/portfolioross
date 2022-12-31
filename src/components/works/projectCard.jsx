import { useState } from "react";
import "../../stylesheet/works/projectCard.css";
import ProjectOpenCard from "./projectOpenCard";

const ProjectCard = ({
  img,
  title,
  description,
  icon,
  technology,
  technology2,
  technology3,
}) => {
  const [isOpenCard, setIsOpenCard] = useState(false);
  const openCard = () => {
    setIsOpenCard(true);
  };

  const closeCard = () => {
    setIsOpenCard(false);
  };
  return (
    <>
      <ProjectOpenCard
        open={isOpenCard}
        close={() => closeCard()}
        imgCard={img}
        titleProject={title}
        technologyPj={technology}
        technology2Pj={technology2}
        technology3Pj={technology3}
      ></ProjectOpenCard>
      <div className="box-work-main" onClick={() => openCard()}>
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
            {icon} {technology}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
