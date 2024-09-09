import spartan from "../../images/worksImg/spartan-cover.jpg";
import linkbio from "../../images/worksImg/linkbio-cover.jpg";
import appsologomas from "../../images/worksImg/appsologomas.webp";
import teknify from "../../images/worksImg/teknify.png";
import cobra from "../../images/worksImg/cobra.png";
import redlion from "../../images/worksImg/redlion.png";
import apirest from "../../images/worksImg/apirest.png";
import mario from "../../images/worksImg/mario.png";
import techsopher from "../../images/worksImg/techsopher.jpg";

export const Data = [
  {
    title: "Spartan Pomodoro",
    description:
      "App centrada en mejorar la gestión del tiempo focalizado a una actividad usando el metodo pomodoro.",
    descriptionLong:
      'La aplicación se centra en ayudar a las personas a mejorar su gestión del tiempo al utilizar el método Pomodoro. El método Pomodoro es una técnica de productividad que se basa en dividir el trabajo en intervalos de tiempo cortos, denominados "Pomodoros", seguidos por breves descansos. La idea es que al dividir el trabajo en intervalos más cortos y concentrarse en una sola tarea durante un período de tiempo limitado.',
    img: spartan,
    technology: "Next.js, Tailwind, Firebase.",
    statepj: "Finalizado",
    yearpj: "2023",
    linkRepo: "https://github.com/Keinnerross/spartan-pomodoro",
    linkDemo: "https://spartanpomodoro.com",
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
  // {
  //   title: "Sitio Web Sologomas",
  //   description:
  //     "Sitio web corporativo diseñado para enseñar productos y brindar información a los clientes",
  //   descriptionLong:
  //     "Un sitio web corporativo es una plataforma en línea que se utiliza para promocionar y vender productos o servicios de una empresa o negocio. Estos sitios suelen incluir información detallada sobre los productos o servicios ofrecidos, así como también información de contacto, direcciones y horarios de atención al cliente. Además, los sitios web corporativos a menudo incluyen secciones para proporcionar información sobre la empresa, como su historia, sus valores y su visión.",
  //   img: sologomas,

  //   technology: "Next.js",
  //   technology2: "React.js ",
  //   technology3: "Webpack",
  //   statepj: "Finalizado",
  //   yearpj: "2023",
  //   linkRepo: "https://github.com/Keinnerross/sologomas-web",
  //   linkDemo: "https://keinnerross.github.io/sologomas-web/",
  //   category: "web",
  // },
  {
    title: "API Rest + website Sologomas SPA",
    description:
      "construcción de API Rest para un sistema de cotización y visualización de inventario.",
    descriptionLong:
      'SoloGomas es una empresa dedicada a la distribución de correas automotrices. Para mantener un control eficiente de su inventario y garantizar suficientes correas disponibles, he desarrollado un sistema de control de inventario a medida. Este sistema utiliza una "API" y una base de datos para permitir que diferentes sistemas y aplicaciones se puedan comunicar entre sí y compartan información. Por ejemplo, si un cliente realiza un pedido de correas a través de la tienda en línea de SoloGomas, el sistema de control de inventario se actualizará automáticamente para reflejar el cambio en el nivel de stock.',
    img: apirest,

    technology: "Node, Express, MySQL, Next.js",
    statepj: "Finalizado",
    yearpj: "2022",
    linkRepo: "https://github.com/Keinnerross/SologomasApp/",
    linkDemo: "https://keinnerross.github.io/sologomas-web/",
    category: "web",
  },


  {
    title: "ChatBot RedLion ",
    category: "web",
    img: redlion,
    description:
      "Desarrollé un chatbot para un redlion estudio de tatuajes, utilizando Node.js y Baileys, que permite agendar citas y solicitar cotizaciones a través de WhatsApp.",
    descriptionLong: `
    Desarrollé un chatbot avanzado para este estudio de tatuajes, diseñado para optimizar la programación de citas y la solicitud de cotizaciones. Utilizando Node.js y la librería Baileys para la integración con WhatsApp, el chatbot permite a los usuarios gestionar sus citas y obtener cotizaciones a través de una serie de preguntas directas. Este sistema automatizado no solo facilita la reserva de fechas y la solicitud de precios, sino que también mejora la eficiencia operativa del estudio al reducir la carga de trabajo del personal y ofrecer una experiencia de usuario fluida y continua.
`,
    yearpj: "2023",
    technology: "Node, Baileys, Docker.",
    statepj: "Finalizado",
    linkDemo: "https://api.whatsapp.com/send/?phone=56931101801&text=%C2%A1Hola%21+Quisiera+hacer+una+consulta+(:&type=phone_number&app_absent=0",
    linkRepo: "https://github.com/Keinnerross/bot_redlion",
  },

  {
    title: "Website IARCA Shelby",
    description:
      "La web de IARCA, construida con Next.js y Tailwind CSS, ofrece un rendimiento excelente y un diseño atractivo y responsivo.",
    descriptionLong:
      "La página web de Industria Automotriz Replica C.A. (IARCA) está construida con Next.js y Tailwind CSS, dos tecnologías modernas que aseguran un rendimiento óptimo y un diseño atractivo. Next.js, un framework de React, proporciona un enfoque robusto para el desarrollo de aplicaciones web, optimizando la experiencia del usuario con renderizado del lado del servidor y generación de sitios estáticos. Tailwind CSS, por su parte, facilita la creación de interfaces de usuario personalizables y responsivas mediante una metodología de diseño basada en utilidades.",
    img: cobra,

    technology: "Next.js, Tailwind",
    statepj: "Finalizado",
    yearpj: "2023",
    category: "web",
    linkRepo: "https://github.com/Keinnerross/web_cobra",
    linkDemo: "https://shelbycobraweb-keinnerross-projects.vercel.app/",

  },

  {
    title: "Wordpress Theme para Teknify",
    category: "cms",
    img: teknify,
    description:
      "Creé un tema para Teknify con Tailwind CSS y PHP, incluyendo un mapa SVG interactivo y efectos de particles.js.",
    descriptionLong: `
    Desarrollé un tema completamente personalizado para Teknify, una empresa que busca destacar en el ámbito digital. El proyecto se basó en la creación de un tema para WordPress utilizando Tailwind CSS y PHP, lo que me permitió lograr un diseño moderno y adaptable.

Entre las características destacadas del tema se incluye un mapa SVG interactivo, que proporciona una experiencia visual envolvente y funcional. Para añadir un toque de dinamismo a la web, integré la librería particles.js, la cual ofrece efectos visuales llamativos y personalizados.

Este proyecto no solo me permitió profundizar en la creación de interfaces visualmente atractivas, sino que también requirió un entendimiento profundo de la jerarquía, funciones y estructura de WordPress, garantizando así un desarrollo sólido y eficiente.
`,
    yearpj: "2023",
    technology: "Next.js, Tailwind",
    statepj: "Finalizado",
    category: "cms",
    linkRepo: "https://github.com/Keinnerross/teknifyTheme",
    linkDemo: "https://teknify.cl",
  },

  {
    title: "Módulo Super Mario",
    category: "front",
    img: mario,

    description:
      "Diseñé un pequeño módulo interactivo que permite a los usuarios controlar a Super Mario y hacerlo saltar sobre un bloque de texto.",

    descriptionLong: `
    <div style="text-align: justify;">
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
    technology: "Javascript, Css.",
    statepj: "Finalizado",
    yearpj: "2022",
    linkRepo: "https://github.com/Keinnerross/Mario-Jump",
    linkDemo: "https://keinnerross.github.io/Mario-Jump/",
  },




];
