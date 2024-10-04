import "../../stylesheet/main/footer.css";
import { Link } from "react-router-dom";

const Footer = ({ worksScroll, aboutScroll, resourceScroll, topScroll }) => {
  return (
    <footer>
      <div className="footerSection">
        <div className="infoFooter">
          <div className="infoFooterSection">
            <h4>KeinnerRoss</h4>
            <p>
              Estoy listo para convertir tus ideas en realidad a través de
              código.
            </p>
            <div>
              <a href="https://wa.me/56922465427" target="_blank">
                <h5>Escribeme un whatsapp</h5>
                <h4>+569 2246 5427</h4>
              </a>
            </div>
          </div>
        </div>
        <div className="menufooterSection">
          <div className="footerColumn">
            <h5>Plataforma</h5>
            <ul>
              <Link
                to="/portfolioross"
                onClick={() => {
                  worksScroll();
                }}
              >
                <li>Trabajos</li>
              </Link>

              <Link to="/about" onClick={() => aboutScroll()}>
                <li>Sobre Mi</li>
              </Link>

              <Link to="/about" onClick={() => resourceScroll()}>
                <li>Recursos</li>
              </Link>
            </ul>
          </div>
          <div className="footerColumn">
            <h5>Servicios</h5>
            <ul>
              <li>Diseño</li>
              <li>Desarrollo</li>
              <li>Integraciones</li>
              <li>Actualizaciones</li>
            </ul>
          </div>
          <div className="footerColumn">
            <h5>Acerca de</h5>
            <ul>
              <Link to="/contact" onClick={() => topScroll()}>
                <li>Contacto</li>
              </Link>

              <a href="https://keinnerross.github.io/linkbio/" target="_blank">
                <li>Mis Links</li>
              </a>
            </ul>
          </div>
        </div>
      </div>
      <span className="footer-text">
        Hecho con ♥ por <span>Keinner Ross</span> ©2024
      </span>
    </footer>
    //
  );
};

export default Footer;
