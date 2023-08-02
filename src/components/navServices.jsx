import "../stylesheet/navServices.css";
import { PiPenNibFill, PiCodeDuotone } from "react-icons/pi";
import { BiGitBranch } from "react-icons/bi";
import { AiFillTool } from "react-icons/ai";
import ServiceCard from "./serviceCard";

const NavServices = ({ isOpen, handleOpen }) => {
  return (
    <div
      className={isOpen ? "navServiceContainer" : "hidden"}
      onMouseLeave={() => handleOpen()}
    >
      <div className="navServiceSection">
        <ServiceCard
          Icon={PiPenNibFill}
          title={"Diseño"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          }
        />
        <ServiceCard
          Icon={PiCodeDuotone}
          title={"Desarrollo"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          }
        />
        <ServiceCard
          Icon={BiGitBranch}
          title={"Integracioines"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          }
        />
        <ServiceCard
          Icon={AiFillTool}
          title={"Actualizaciones"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          }
        />
      </div>
    </div>
  );
};

export default NavServices;
