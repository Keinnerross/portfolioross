import "../stylesheet/navServices.css";
import { PiPenNibFill, PiCodeDuotone } from "react-icons/pi";
import { BiGitBranch } from "react-icons/bi";
import { AiFillTool } from "react-icons/ai";
import ServiceCard from "./serviceCard";

const NavServices = ({ isOpen, handleOpen, isLightMode }) => {
  const dataService = [
    {
      icon: PiPenNibFill,
      title: "Diseño",
      description: "Diseño Visual: Marca, Web, Redes Sociales.",
    },
    {
      icon: PiCodeDuotone,
      title: "Desarrollo",
      description:
        "Construyendo Soluciones a través del Desarrollo Especializado.",
    },

    {
      icon: BiGitBranch,
      title: "Integraciones",
      description:
        "Integraciones personalizadas. Potencia la funcionalidad de tu plataforma.",
    },
    {
      icon: AiFillTool,
      title: "Actualizaciones",
      description:
        "Actualizaciones y optimización de software para un máximo rendimiento.",
    },
  ];

  return (
    <div
      className={isOpen ? "navServiceContainer" : "hidden"}
      onMouseEnter={() => handleOpen(true)}
      onMouseLeave={() => handleOpen(false)}
    >
      <div className="navServiceSection">
        {dataService.map((data) => (
          <ServiceCard
            Icon={data.icon}
            title={data.title}
            description={data.description}
            isLightMode={isLightMode}
          />
        ))}
      </div>
    </div>
  );
};

export default NavServices;
