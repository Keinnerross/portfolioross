import ResourceCard from "./resourceCard.jsx";
import "../../stylesheet/resources/resourcesMain.css";
import { resourcesData } from "./resourcesData.js";

const Resources = ({ resRefProp }) => {
  return (
    <div className="resourcesContainer" id="resources" ref={resRefProp}>
      <div className="resourceTitle">
        <h2>Recursos</h2>
      </div>
      <div className="resourcesSection">
        {resourcesData.map((data, i) => (
          <ResourceCard
            key={i}
            titleRes={data.title}
            imgRes={data.img}
            descriptionRes={data.description}
            urlRes={data.url}
          />
        ))}
      </div>
    </div>
  );
};

export default Resources;
