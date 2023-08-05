import "../../stylesheet/main/footer.css";

const Footer = () => {
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
              <li>Trabajos</li>
              <li>Sobre Mi</li>
              <li>Recursos</li>
              <li>Mis Links</li>
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
              <li>Contacto</li>
              <li>Inpulsa!</li>
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
