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
        <a
          href="https://www.linkedin.com/in/keinner-ross-durantt-28bb231b5/"
          target="_blank"
        >
          <SlSocialLinkedin size={24} />
        </a>
        <a href="https://github.com/Keinnerross/" target="_blank">
          <VscGithubAlt size={24} />
        </a>
        <a href="https://www.instagram.com/keinnerross/" target="_blank">
          <SlSocialInstagram size={24} />
        </a>
        <a href="https://twitter.com/keinnerross/" target="_blank">
          <RxTwitterLogo size={24} />
        </a>
        <a href="https://www.tiktok.com/@keinnerross?lang=es" target="_blank">
          <SiTiktok size={24} />
        </a>
        <a href="https://discord.gg/rWH4zN4WN4" target="_blank">
          <RxDiscordLogo size={24} />
        </a>
        <a href="https://www.youtube.com/@keinnerross.6223" target="_blank">
          <SlSocialYoutube size={24} />
        </a>
      </div>
    </>
  );
};

export default ButtonsAndSocial;
