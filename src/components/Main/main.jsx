import "../../stylesheet/main/main.css";
import ButtonsAndSocial from "./buttonsAndSocial";
import pcs from "../../images/icons/pcs.png";
import { PiPenNibFill, PiCodeDuotone } from "react-icons/pi";
import { BiGitBranch } from "react-icons/bi";
import { AiFillTool } from "react-icons/ai";
import aboutText from "../../images/main/abouText.png";
import aboutTextLightMode from "../../images/main/abouText_LightMode.png";

const Main = ({ isLightMode }) => {
  const settingIcon = {
    size: 22,
  };

  return (
    <div id="about" className="about-container pt-0 md:pt-[120px]">
      <div className="about-content-container text-center">
        <div className="about-info md:pb-[25px] flex flex-col">
          <section className="info ">
            <h4 className="text-[40px] md:text-[81px] pt-[35px] p-[0]">
              Explora mi portafolio de{" "}
              <span className="purple-1 ">desarrollo! </span>{" "}
            </h4>
            <p className="py-[20px] md:pt-[45px] md:pb-[30px]">
              Me llamo Keinner Ross y soy{" "}
              <span className="purple-1 weight">
                {" "}
                desarrollador Fullstack con Javascript.
              </span>{" "}
              Trabajo como freelancer desde hace más de 3 años brindando
              soluciones a empresas, agencias y emprendedores.
            </p>
          </section>
          <ButtonsAndSocial />

        </div>

        <div className="videoitem pt-[40px] pb-[75px] ">
          <iframe
            width="100%"
            height="550px"
            src="https://www.youtube.com/embed/dAvDgeEDGaY"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <div className="aboutTextImgContainer top-[-40px] right-[20px] scale-[.8]">
            <img
              src={isLightMode ? aboutTextLightMode : aboutText}
              width="260px"
              alt="info"
            />
          </div>
        </div>

        {/* <div className="serviceTagContainer">
            <div className="serviceTag">
              <PiPenNibFill size={settingIcon.size} />
              <h5>Diseño</h5>
            </div>
            <div className="serviceTag">
              <PiCodeDuotone size={settingIcon.size} />
              <h5>Desarrollo</h5>
            </div>
            <div className="serviceTag">
              <BiGitBranch size={settingIcon.size} />
              <h5>Integraciones</h5>
            </div>
            <div className="serviceTag">
              <AiFillTool size={settingIcon.size} />
              <h5>Actualizaciones</h5>
            </div>
          </div> */}
      </div>
    </div>
  );
};

export default Main;
