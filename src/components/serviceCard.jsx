import { useState } from "react";
/*Estilos desde el NavServices.css para "Service Card"*/

const ServiceCard = ({ Icon, title, description }) => {
  const [colorIcon, setColorIcon] = useState("#fff");

  const iconSetting = {
    size: 35,
    color: colorIcon,
  };

  const handleColor = () => {
    colorIcon == "#fff" ? setColorIcon("#218ffe") : setColorIcon("#fff");
  };

  return (
    <div
      className="serviceCard"
      onMouseEnter={() => handleColor()}
      onMouseLeave={() => handleColor()}
    >
      <div>
        <Icon fill={iconSetting.color} size={iconSetting.size} />
      </div>
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
