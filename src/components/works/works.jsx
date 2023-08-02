import ProjectCard from "./projectCard";
import "../../stylesheet/works/works.css";
import { SiReact, SiNodedotjs } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { Data } from "./worksData.js";
import { useState } from "react";
import parse from "html-react-parser";

const Works = ({ worksRefProp }) => {
  const [categorySelect, setCategorySelect] = useState("All");

  const handleCategory = (e) => {
    setCategorySelect(e.target.value);
  };

  const categoryRender = () => {
    if (categorySelect == "All") {
      return Data.map((work, i) => (
        <ProjectCard
          key={i}
          title={work.title}
          description={work.description}
          descriptionLong={
            work.descriptionLong ? parse(work.descriptionLong) : ""
          }
          // icon={<SiReact />}
          technology={work.technology}
          technology2={work.technology2}
          technology3={work.technology3}
          img={work.img}
          statepj={work.statepj}
          yearpj={work.yearpj}
          linkRepo={work.linkRepo}
          linkDemo={work.linkDemo}
        />
      ));
    } else if (categorySelect == "CMS/Wordpress") {
      const dataFilter = Data.filter((work) => work.category == "wp");
      return dataFilter.map((work, i) => (
        <ProjectCard
          key={i}
          title={work.title}
          description={work.description}
          descriptionLong={
            work.descriptionLong ? parse(work.descriptionLong) : ""
          }
          // icon={<SiReact />}
          technology={work.technology}
          technology2={work.technology2}
          technology3={work.technology3}
          img={work.img}
          statepj={work.statepj}
          yearpj={work.yearpj}
          linkRepo={work.linkRepo}
          linkDemo={work.linkDemo}
        />
      ));
    } else if (categorySelect == "Web") {
      const dataFilter = Data.filter((work) => work.category == "web");
      return dataFilter.map((work, i) => (
        <ProjectCard
          key={i}
          title={work.title}
          description={work.description}
          descriptionLong={
            work.descriptionLong ? parse(work.descriptionLong) : ""
          }
          // icon={<SiReact />}
          technology={work.technology}
          technology2={work.technology2}
          technology3={work.technology3}
          img={work.img}
          statepj={work.statepj}
          yearpj={work.yearpj}
          linkRepo={work.linkRepo}
          linkDemo={work.linkDemo}
        />
      ));
    } else if (categorySelect == "Front") {
      const dataFilter = Data.filter((work) => work.category == "front");
      return dataFilter.map((work, i) => (
        <ProjectCard
          key={i}
          title={work.title}
          description={work.description}
          descriptionLong={
            work.descriptionLong ? parse(work.descriptionLong) : ""
          }
          // icon={<SiReact />}
          technology={work.technology}
          technology2={work.technology2}
          technology3={work.technology3}
          img={work.img}
          statepj={work.statepj}
          yearpj={work.yearpj}
          linkRepo={work.linkRepo}
          linkDemo={work.linkDemo}
        />
      ));
    } else if (categorySelect == "Mobil") {
      const dataFilter = Data.filter((work) => work.category == "mobil");
      return dataFilter.map((work, i) => (
        <ProjectCard
          key={i}
          title={work.title}
          description={work.description}
          descriptionLong={
            work.descriptionLong ? parse(work.descriptionLong) : ""
          }
          // icon={<SiReact />}
          technology={work.technology}
          technology2={work.technology2}
          technology3={work.technology3}
          img={work.img}
          statepj={work.statepj}
          yearpj={work.yearpj}
          linkRepo={work.linkRepo}
          linkDemo={work.linkDemo}
        />
      ));
    } else {
      return <p>No results found</p>;
    }
  };

  return (
    <div className="workRefRecive" id="works" ref={worksRefProp}>
      <div className="works-container">
        <div className="works-content-container">
          <div className="nav-works">
            <h4>Trabajos</h4>
            <select
              className="selectWorks"
              defaultValue="Node"
              onChange={(e) => handleCategory(e)}
            >
              <option>All</option>
              <option>Web</option>
              <option>Mobil</option>
              <option>Front</option>
              <option>CMS/Wordpress</option>
            </select>
          </div>

          <div className="box-works-container">{categoryRender()}</div>
        </div>
      </div>
    </div>
  );
};

export default Works;
