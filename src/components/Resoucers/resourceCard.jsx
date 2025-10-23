import "../../stylesheet/resources/resourceCard.css";

const ResourceCard = ({ titleRes, descriptionRes, imgRes, urlRes }) => {
  return (
    <div className="resourceCardContainer">
      <a href={urlRes} target="_blank" rel="noreferrer">
        <div className="resourceCardSection">
          <div
            className="resourceImg"
            style={{ backgroundImage: `url(${imgRes})` }}
          ></div>
          <div className="resourceDescriptionContainer">
            <h2 className="text-lg font-bold">{titleRes || "Titulo"}</h2>
            <span className="text-sm">{descriptionRes ||
                "Lorem ipsum dolor sit amet consectetur"}
            </span>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ResourceCard;
