import "../../stylesheet/resources/resourceCard.css";

const ResourceCard = ({ titleRes, descriptionRes, imgRes }) => {
  return (
    <div className="resourceCardContainer">
      <div className="resourceCardSection">
        <div
          className="resourceImg"
          style={{ backgroundImage: `url(${imgRes})` }}
        ></div>
        <div className="resourceDescriptionContainer">
          <h2>{titleRes || "Titulo"}</h2>
          <p>
            {descriptionRes ||
              "Lorem ipsum dolor sit amet consectetur adipisicing elit"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;
