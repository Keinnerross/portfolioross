import "../../stylesheet/main/footer.css";
import { Link } from "react-router-dom";

const Footer = ({ workRef }) => {
  const timerScroll = () => {
    setTimeout(() => {
      workRef.current.scrollIntoView({
        scrollBehavior: "smooth",
      });
    }, 300);
  };

  return (
    <footer>
      <div className="footerSection">
        <div className="infoFooter">
          <div className="infoFooterSection">
            <h4>KeinnerRoss</h4>
            <p>
              Estoy listo para convertir tus ideas en realidad a través de un
              código.
            </p>
            <div>
              <h5>Escribeme un whatsapp</h5>
              <h4>+569 9130 2647</h4>
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
                  timerScroll();
                }}
              >
                <li>Trabajos</li>
              </Link>

              <Link to="/about">
                <li>Sobre Mi</li>
              </Link>

              <Link to="/about">
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
              <Link to="/contact">
                <li>Contacto</li>
              </Link>

              <a href="https://keinnerross.github.io/linkbio/" target="_blank">
                <li>Mis Links</li>
              </a>
            </ul>
          </div>
        </div>
      </div>
      {/* <span className="footer-text">
        Hecho con ♥ por <span>Keinner Ross</span> ©2023
      </span> */}
    </footer>
  );
};

export default Footer;
