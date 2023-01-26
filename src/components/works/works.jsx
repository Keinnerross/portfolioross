import ProjectCard from "./projectCard";
import "../../stylesheet/works/works.css";
import { SiReact, SiNodedotjs } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import sologomas from "../../images/icons/sologomas.png";
import spartan from "../../images/worksImg/spartan-cover.jpg";
import linkbio from "../../images/worksImg/linkbio-cover.jpg";
import appsologomas from "../../images/worksImg/appsologomas.webp";
import ninja from "../../images/worksImg/ninja.png";
import appar from "../../images/worksImg/appart.webp";

const Works = ({ worksRefProp }) => {
  return (
    <div className="workRefRecive" id="works" ref={worksRefProp}>
      <div className="works-container">
        <div className="works-content-container">
          <div className="nav-works">
            <h4>Trabajos</h4>
            <select defaultValue="Node">
              <option>React</option>
              <option>Node</option>
              <option>Value 3</option>
            </select>
          </div>

          <div className="box-works-container">
            <ProjectCard
              title="Spartan Pomodoro"
              description="App mejorar la gestión del tiempo focalizado a una actividad usando el metodo pomodoro."
              descriptionLong='La aplicación se centra en ayudar a las personas a mejorar su gestión del tiempo al utilizar el método Pomodoro. El método Pomodoro es una técnica de productividad que se basa en dividir el trabajo en intervalos de tiempo cortos, denominados "Pomodoros", seguidos por breves descansos. La idea es que al dividir el trabajo en intervalos más cortos y concentrarse en una sola tarea durante un período de tiempo limitado.'
              icon={<SiReact />}
              technology="React.js"
              technology2="Webpack"
              technology3="Npm"
              img={spartan}
              statepj="En curso"
              yearpj="2022"
              linkRepo="https://github.com/Keinnerross/Espartan-pomodoro-app"
              linkDemo="https://keinnerross.github.io/Espartan-pomodoro-app/"
            />

            <ProjectCard
              title="Link in Bio"
              description="Menú personalizado dónde están todos los links a redes sociales, website, etc..."
              descriptionLong="Un menú personalizado es una lista de enlaces a sitios web y redes sociales que seleccionas y organizas de manera específica para tus necesidades. Estos enlaces pueden incluir tu sitio web, tus redes sociales como Facebook, Twitter, Instagram y LinkedIn, y otros sitios que consideres útiles para tus seguidores o clientes. El menú personalizado se puede colocar en cualquier lugar de tu sitio web o blog, y es una manera eficiente de permitir a tus visitantes acceder fácilmente a toda tu presencia en línea. "
              icon={<TbBrandNextjs />}
              technology="React.js"
              technology2="Webpack"
              img={linkbio}
              statepj="Finalizado"
              yearpj="2023"
              linkRepo="https://github.com/Keinnerross/linkbio"
              linkDemo="https://keinnerross.github.io/linkbio/"
            />
          </div>
          <div className="box-works-container">
            <ProjectCard
              title="SoloGomas Website"
              description="Sitio web corporativo diseñado para enseñar productos y brindar información a los clientes"
              descriptionLong="Un sitio web corporativo es una plataforma en línea que se utiliza para promocionar y vender productos o servicios de una empresa o negocio. Estos sitios suelen incluir información detallada sobre los productos o servicios ofrecidos, así como también información de contacto, direcciones y horarios de atención al cliente. Además, los sitios web corporativos a menudo incluyen secciones para proporcionar información sobre la empresa, como su historia, sus valores y su visión."
              icon={<TbBrandNextjs />}
              technology="Next.js"
              technology2="React.js"
              technology3="Webpack"
              img={sologomas}
              statepj="En curso"
              yearpj="2023"
              linkRepo="https://github.com/Keinnerross"
              linkDemo="https://sologomas.cl/"
            />
            <ProjectCard
              title="SoloGomas Belts.app"
              description="Sistema de control de inventario, construcción de api y base de datos más consumo."
              descriptionLong='SoloGomas es una empresa dedicada a la distribución de correas automotrices. Para mantener un control eficiente de su inventario y garantizar suficientes correas disponibles, he desarrollado un sistema de control de inventario a medida.

              Este sistema utiliza una "API" y una base de datos para permitir que diferentes sistemas y aplicaciones se puedan comunicar entre sí y compartan información. Por ejemplo, si un cliente realiza un pedido de correas a través de la tienda en línea de SoloGomas, el sistema de control de inventario se actualizará automáticamente para reflejar el cambio en el nivel de stock.'
              icon={<SiNodedotjs />}
              technology="Node"
              technology2="Datatable"
              technology3="jQuery"
              img={appsologomas}
              statepj="En curso"
              yearpj="2022"
              linkRepo="https://github.com/Keinnerross/SologomasApp/"
              linkDemo="https://keinnerross.github.io/SologomasApp/"
            />
          </div>
          <div className="box-works-container">
            <ProjectCard
              title="Ninja Tap"
              description="Juego de medir tu velocidad de clicks/taps contra reloj, ¡divertido y adictivo!"
              descriptionLong="Este juego es una herramienta divertida y adictiva que te permite medir tu velocidad de clicks o taps en relación con el tiempo. Al comenzar el juego, se te presentará un objetivo, como hacer un cierto número de clicks o taps en un período de tiempo determinado. Luego, tendrás que hacer clic o tocar el objetivo con la mayor velocidad posible para cumplir con el reto."
              icon={<SiReact />}
              technology="React Native"
              technology2="Expo"
              img={ninja}
              statepj="En curso"
              yearpj="2022"
            />

            <ProjectCard
              title="Human Picture"
              description="App dónde puedes practicar el dibujo de poses humanas con temporizador, útil para artistas y estudiantes de arte."
              descriptionLong="Esta aplicación es una herramienta útil para artistas y estudiantes de arte que deseen mejorar sus habilidades de dibujo de poses humanas. La aplicación incluye un temporizador que te permite practicar el dibujo de poses en un plazo de tiempo determinado, lo que te ayudará a desarrollar la habilidad de captar rápidamente la esencia de una pose y dibujarla de manera precisa y detallada."
              icon={<SiReact />}
              technology="React Native"
              img={appar}
              statepj="En curso"
              yearpj="2022"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
