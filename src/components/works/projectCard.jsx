import { useState } from "react";
import "../../stylesheet/works/projectCard.css";
import ProjectOpenCard from "./projectOpenCard";

const ProjectCard = ({
  img,
  title,
  description,
  descriptionLong,
  icon,
  technology,
  technology2,
  technology3,
  statepj,
  yearpj,
  linkRepo,
  linkDemo,
}) => {
  const [isOpenCard, setIsOpenCard] = useState(false);
  const openCard = () => {
    setIsOpenCard(true);
  };

  const [animationCloseCard, setAnimationCloseCard] = useState(false);

  const closeCard = () => {
    setAnimationCloseCard(true);

    setTimeout(() => {
      setAnimationCloseCard(false);
      setIsOpenCard(false);
    }, 340);
  };
  return (
    <>
      <ProjectOpenCard
        open={isOpenCard}
        close={() => closeCard()}
        imgCard={img}
        titleProject={title}
        descriptionPj={descriptionLong}
        technologyPj={technology}
        technology2Pj={technology2}
        technology3Pj={technology3}
        anim={animationCloseCard}
        state={statepj}
        year={yearpj}
        linkRepoOpen={linkRepo}
        linkDemoOpen={linkDemo}
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
          {description}
          <div className="tech-project-container">
            {icon} {technology}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
