import "../../stylesheet/resources/resourceCard.css";

const ResourceCard = ({ titleRes, descriptionRes, imgRes, urlRes }) => {
  return (
    <div className="resourceCardContainer">
      <a href={urlRes} target="_blank">
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
      </a>
    </div>
  );
};

export default ResourceCard;
