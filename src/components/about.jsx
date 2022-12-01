import "../stylesheet/about.css";
import Techsopher from "./svg/techsopher";

const About = () => {
  return (
    <div id="about" className="about-container">
      <div className="about-content-container">
        <div className="about-info">
          <section className="info">
            <h4>Hola!</h4>
            <p>
              Me llamo KeinnerRoss ( nacido en 1998 - Venezuela)
              <span className="purple-1">
                soy diseñador y desarrollador Frontend,
              </span>{" "}
              he trabajado como freelancer en estos últimos años, ahora busco
              nuevos retos donde pueda fortalecer mis habilidades y trabajar en
              equipo. Amo la naturaleza, la historia y el arte.
            </p>
          </section>
          <section className="buttons-about">
            <button>Blog</button>
            <button>Otras Cosas</button>
            <div className="front-buttons">
              <div
                className="button-front git"
                onClick={() => {
                  alert("Corriendo Prroxd");
                }}
              ></div>
              <div className="button-front linkedin"></div>
              <div className="button-front instagram"></div>
              <span>Twitter</span>
              <span>Tiktok</span>
              <span>Discord</span>
              <span>Youtube</span>
            </div>
          </section>
        </div>
        <div className="img-about-container">
          <img
            src="https://images.pexels.com/photos/115655/pexels-photo-115655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
