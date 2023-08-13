import "../stylesheet/navServices.css";
import { PiPenNibFill, PiCodeDuotone } from "react-icons/pi";
import { BiGitBranch } from "react-icons/bi";
import { AiFillTool } from "react-icons/ai";
import ServiceCard from "./serviceCard";

const NavServices = ({ isOpen, handleOpen }) => {
  return (
    <div
      className={isOpen ? "navServiceContainer" : "hidden"}
      onMouseEnter={() => handleOpen(true)}
      onMouseLeave={() => handleOpen(false)}
    >
      <div className="navServiceSection">
        <ServiceCard
          Icon={PiPenNibFill}
          title={"Diseño"}
          description={"Diseño Visual: Marca, Web, Redes Sociales."}
        />
        <ServiceCard
          Icon={PiCodeDuotone}
          title={"Desarrollo"}
          description={
            "Construyendo Soluciones a través del Desarrollo Especializado."
          }
        />
        <ServiceCard
          Icon={BiGitBranch}
          title={"Integracioines"}
          description={
            "Integraciones personalizadas. Potencia la funcionalidad de tu plataforma."
          }
        />
        <ServiceCard
          Icon={AiFillTool}
          title={"Actualizaciones"}
          description={
            "Actualizaciones y optimización de software para un máximo rendimiento."
          }
        />
      </div>
    </div>
  );
};

export default NavServices;
