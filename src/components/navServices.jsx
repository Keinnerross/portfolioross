import "../stylesheet/navServices.css";
import { PiPenNibFill, PiCodeDuotone } from "react-icons/pi";
import { BiGitBranch } from "react-icons/bi";
import { AiFillTool } from "react-icons/ai";
import { useState } from "react";

const NavServices = ({ isOpen, handleOpen }) => {
  const [colorIcon, setColorIcon] = useState("#fff");

  const iconSetting = {
    size: 35,
    color: colorIcon,
  };

  const handleColor = () => {
    if (colorIcon == "#fff") {
      setColorIcon("#218ffe");
    } else {
      setColorIcon("#fff");
    }
  };

  return (
    <div
      className={isOpen ? "navServiceContainer" : "hidden"}
      onMouseLeave={() => handleOpen()}
    >
      <div className="navServiceSection">
        <div
          className="serviceCard"
          onMouseEnter={() => handleColor()}
          onMouseLeave={() => handleColor()}
        >
          <div>
            <PiPenNibFill size={iconSetting.size} fill={iconSetting.color} />
          </div>
          <div>
            <h4>Diseño</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </div>
        <div
          className="serviceCard"
          onMouseEnter={() => handleColor()}
          onMouseLeave={() => handleColor()}
        >
          <div>
            <PiCodeDuotone size={iconSetting.size} fill={iconSetting.color} />
          </div>
          <div>
            <h4>Desarrollo</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </div>
        <div
          className="serviceCard"
          onMouseEnter={() => handleColor()}
          onMouseLeave={() => handleColor()}
        >
          <div>
            <BiGitBranch size={iconSetting.size} fill={iconSetting.color} />
          </div>

          <div>
            <h4>Intregraciones</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </div>
        <div
          className="serviceCard"
          onMouseEnter={() => handleColor()}
          onMouseLeave={() => handleColor()}
        >
          <div>
            <AiFillTool size={iconSetting.size} fill={iconSetting.color} />
          </div>

          <div>
            <h4>Actualizaciones</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavServices;
