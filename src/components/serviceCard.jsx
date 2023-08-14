import { useEffect, useState } from "react";
/*Estilos desde el NavServices.css para "Service Card"*/

const ServiceCard = ({ Icon, title, description, isLightMode }) => {
  const [colorIcon, setColorIcon] = useState("#fff");

  const changeColorIcon = () => {
    if (isLightMode) {
      setColorIcon("#000");
    } else {
      setColorIcon("#fff");
    }
  };

  useEffect(() => {
    changeColorIcon();
  }, [isLightMode]);

  const handleColor = () => {
    if (isLightMode) {
      colorIcon == "#000" ? setColorIcon("#218ffe") : changeColorIcon();
    }

    if (!isLightMode) {
      colorIcon == "#fff" ? setColorIcon("#218ffe") : changeColorIcon();
    }
  };

  const iconSetting = {
    size: 35,
    color: colorIcon,
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
      <div className={isLightMode ? "serviceSectionLight" : "serviceSection"}>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
