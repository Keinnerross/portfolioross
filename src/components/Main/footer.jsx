import "../../stylesheet/main/footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footerSection">

        <div className="infoFooter">
          <span>KeinnerRoss</span>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicin.</p>
          <span>Escribeme un whatsapp</span>
          <h4>9 9130 2647</h4>
        </div>
        <div className="menufooterSection">
          <div className="footerColumn"><h5>Plataforma</h5> <ul><li>Trabajos</li><li>Sobre Mi</li></ul></div>
        </div>
      </div>
      {/* <span className="footer-text">
        Hecho con ♥ por <span>Keinner Ross</span> ©2023
      </span> */}
    </footer>
  );
};

export default Footer;
