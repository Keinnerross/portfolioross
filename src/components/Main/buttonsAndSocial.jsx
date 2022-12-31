import "../../stylesheet/main/buttonsAndSocial.css";
import { VscGithubAlt } from "react-icons/vsc";
import {
  SlSocialLinkedin,
  SlSocialYoutube,
  SlSocialInstagram,
} from "react-icons/sl";
import { RxTwitterLogo, RxDiscordLogo } from "react-icons/rx";
import { SiTiktok } from "react-icons/si";
import { Link } from "react-router-dom";

const ButtonsAndSocial = () => {
  return (
    <>
      <div className="buttons-about">
        <a href="#works">
          <div className="button-primary">Trabajos</div>
        </a>
        <Link to="/about">
          <div className="button-secundary">Sobre Mi</div>
        </Link>
      </div>
      <div className="front-buttons">
        <SlSocialLinkedin />
        <VscGithubAlt />
        <SlSocialInstagram />
        <RxTwitterLogo />
        <SiTiktok />
        <RxDiscordLogo />
        <SlSocialYoutube />
      </div>
    </>
  );
};

export default ButtonsAndSocial;
