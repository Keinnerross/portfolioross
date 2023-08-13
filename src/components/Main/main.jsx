import "../../stylesheet/main/main.css";
import ButtonsAndSocial from "./buttonsAndSocial";
import pcs from "../../images/icons/pcs.png";
import { PiPenNibFill, PiCodeDuotone } from "react-icons/pi";
import { BiGitBranch } from "react-icons/bi";
import { AiFillTool } from "react-icons/ai";
import aboutText from "../../images/main/abouText.png";

const Main = () => {
  const settingIcon = {
    size: 22,
  };

  return (
    <div id="about" className="about-container">
      <div className="about-content-container">
        <div className="about-info">
          <section className="info">
            <h4>
              Explora mi portafolio de{" "}
              <span className="purple-1 ">desarrollo ! </span>{" "}
            </h4>
            <p>
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
        <div className="videoAboutContainer">
          <div className="videoitem">
            <iframe
              width="90%"
              height="315"
              src="https://www.youtube.com/embed/4TSxQWrwY8c"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>

            <div className="aboutTextImgContainer">
              <img src={aboutText} width="260px" alt="" />
            </div>
          </div>

          <div className="serviceTagContainer">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
