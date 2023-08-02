import sologomas from "../../images/icons/sologomas.png";
import spartan from "../../images/worksImg/spartan-cover.jpg";
import linkbio from "../../images/worksImg/linkbio-cover.jpg";
import appsologomas from "../../images/worksImg/appsologomas.webp";
import appar from "../../images/worksImg/appart.webp";

import pulperia from "../../images/worksImg/pulperia.jpg";
import integrital from "../../images/worksImg/integrital.png";
import jaxconstruction from "../../images/worksImg/jaxconstruction.jpg";
import Yami from "../../images/worksImg/yami.png";
import mario from "../../images/worksImg/mario.png";
import techsopher from "../../images/worksImg/techsopher.jpg";

export const Data = [
  {
    title: "Astra Pomodoro",
    description:
      "App mejorar la gestión del tiempo focalizado a una actividad usando el metodo pomodoro.",
    descriptionLong:
      'La aplicación se centra en ayudar a las personas a mejorar su gestión del tiempo al utilizar el método Pomodoro. El método Pomodoro es una técnica de productividad que se basa en dividir el trabajo en intervalos de tiempo cortos, denominados "Pomodoros", seguidos por breves descansos. La idea es que al dividir el trabajo en intervalos más cortos y concentrarse en una sola tarea durante un período de tiempo limitado.',
    img: spartan,
    technology: "React.js",
    technology2: "Webpack",
    technology3: "Npm",
    statepj: "Finalizado",
    yearpj: "2022",
    linkRepo: "https://github.com/Keinnerross/Espartan-pomodoro-app",
    linkDemo: "https://keinnerross.github.io/Espartan-pomodoro-app/",
    category: "web",
  },
  //   {
  //     title: "Link in Bio",
  //     description:
  //       "Menú personalizado dónde están todos los links a redes sociales, website, etc...",
  //     descriptionLong:
  //       "Un menú personalizado es una lista de enlaces a sitios web y redes sociales que seleccionas y organizas de manera específica para tus necesidades. Estos enlaces pueden incluir tu sitio web, tus redes sociales como Facebook, Twitter, Instagram y LinkedIn, y otros sitios que consideres útiles para tus seguidores o clientes. El menú personalizado se puede colocar en cualquier lugar de tu sitio web o blog, y es una manera eficiente de permitir a tus visitantes acceder fácilmente a toda tu presencia en línea. ",
  //     img: linkbio,

  //     technology: "React.js",
  //     technology2: "Webpack",
  //     statepj: "Finalizado",
  //     yearpj: "2023",
  //     linkRepo: "https://github.com/Keinnerross/linkbio",
  //     linkDemo: "https://keinnerross.github.io/linkbio/",
  //   },
  {
    title: "SoloGomas Website",
    description:
      "Sitio web corporativo diseñado para enseñar productos y brindar información a los clientes",
    descriptionLong:
      "Un sitio web corporativo es una plataforma en línea que se utiliza para promocionar y vender productos o servicios de una empresa o negocio. Estos sitios suelen incluir información detallada sobre los productos o servicios ofrecidos, así como también información de contacto, direcciones y horarios de atención al cliente. Además, los sitios web corporativos a menudo incluyen secciones para proporcionar información sobre la empresa, como su historia, sus valores y su visión.",
    img: sologomas,

    technology: "Next.js",
    technology2: "React.js ",
    technology3: "Webpack",
    statepj: "Finalizado",
    yearpj: "2023",
    linkRepo: "https://github.com/Keinnerross/sologomas-web",
    linkDemo: "https://keinnerross.github.io/sologomas-web/",
    category: "web",
  },
  {
    title: "SoloGomas Belts.app",
    description:
      "Sistema de control de inventario, construcción de api y base de datos más consumo.",
    descriptionLong:
      'SoloGomas es una empresa dedicada a la distribución de correas automotrices. Para mantener un control eficiente de su inventario y garantizar suficientes correas disponibles, he desarrollado un sistema de control de inventario a medida. Este sistema utiliza una "API" y una base de datos para permitir que diferentes sistemas y aplicaciones se puedan comunicar entre sí y compartan información. Por ejemplo, si un cliente realiza un pedido de correas a través de la tienda en línea de SoloGomas, el sistema de control de inventario se actualizará automáticamente para reflejar el cambio en el nivel de stock.',
    img: appsologomas,

    technology: "Node",
    technology2: "Datatable",
    technology3: "jQuery",
    statepj: "En curso",
    yearpj: "2022",
    linkRepo: "https://github.com/Keinnerross/SologomasApp/",
    linkDemo: "https://keinnerross.github.io/SologomasApp/",
    category: "web",
  },

  {
    title: "Human Picture",
    description:
      "App dónde puedes practicar el dibujo de poses humanas con temporizador, útil para artistas y estudiantes de arte.",
    descriptionLong:
      "Esta aplicación es una herramienta útil para artistas y estudiantes de arte que deseen mejorar sus habilidades de dibujo de poses humanas. La aplicación incluye un temporizador que te permite practicar el dibujo de poses en un plazo de tiempo determinado, lo que te ayudará a desarrollar la habilidad de captar rápidamente la esencia de una pose y dibujarla de manera precisa y detallada.",
    img: appar,

    technology: "React Native",
    statepj: "En curso",
    yearpj: "2022",
    category: "mobil",
  },
  {
    title: "Módulo Super Mario",
    category: "front",
    img: mario,

    description:
      "Inspirado en el famoso videojuego, diseñé un pequeño módulo interactivo que permite a los usuarios controlar a Super Mario y hacerlo saltar sobre un bloque de texto.",

    descriptionLong: `
    <div style="text-align: justify;  ">
    <h4>Características Clave:</h4>
    <br />
    <ul>
      <li>
        Implementación de JavaScript Vanilla para manejar la lógica de salto y
        animaciones. Interacción dinámica: Al hacer clic en el botón de salto,
        Super Mario salta sobre un bloque de texto.
      </li>
    <br />
      <li>
        Cambio de contenido: El bloque de texto cambia su información al
        interactuar con Super Mario, lo que muestra la versatilidad del módulo
        para presentar información temática.
      </li>
    <br />
      <li>
        Potencial de Integración: Esta dinámica interactiva puede ser
        fácilmente adaptada y combinada en otros sitios web con temáticas
        específicas, aportando un toque lúdico y atractivo a la experiencia
        del usuario.
      </li>
      <br />
      <li>
      Este proyecto no solo demuestra mis habilidades técnicas en JavaScript,
      sino también mi capacidad para diseñar soluciones creativas y versátiles
      que pueden enriquecer la interacción en sitios web.
      </li>
    </ul>
    </div>

`,

    technology: "CSS,",
    technology2: "Javascript",
    technology3: "",
    statepj: "Finalizado",
    yearpj: "2022",
    linkRepo: "https://github.com/Keinnerross",
    linkDemo: "https://github.com/Keinnerross",
  },
  {
    title: "Tecnocrático",
    category: "front",
    img: techsopher,
  },

  {
    title: "Pulperia 5 Estrellas",
    category: "wp",
    img: pulperia,
  },
  {
    title: "JaxConstruction",
    category: "wp",
    img: jaxconstruction,
  },
  {
    title: "Integrital Edge",
    category: "wp",
    img: integrital,
  },
  {
    title: "Yami Beautiful Salon",
    category: "wp",
    img: Yami,
  },
];
