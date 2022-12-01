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
              </span> he trabajado como freelancer en estos últimos años, ahora busco
              nuevos retos donde pueda fortalecer mis habilidades y trabajar en
              equipo. Amo la naturaleza, la historia y el arte.
            </p>
          </section>
          <section className="interest-info">
          <h2>Intereses</h2>
          <div className="interests">
            <div className="interest">
              <div className="interest-ico procedural"></div>Procedural
              programming
            </div>
            <div className=" interest">
              <div className="interest-ico platzi"></div>Comunidad Platzi
            </div>
            <div className="interest">
              <div className="interest-ico filosofia"></div>Filosofía de la
              tecnología
            </div>
          </div>
          </section>
        </div>
        <div className="techsopher-container">
          <img src="https://images.pexels.com/photos/115655/pexels-photo-115655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
