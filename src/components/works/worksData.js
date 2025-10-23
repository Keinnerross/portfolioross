import rms from "../../images/worksImg/rms.png";
import sologomas from "../../images/worksImg/slogomas.png";
import quenclima from "../../images/worksImg/quenclima.webp";
import fileread from "../../images/worksImg/fileread.png";
import redlion from "../../images/worksImg/redlion.png";
import mario from "../../images/worksImg/mario.png";

export const Data = [
  
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
    title: "Ecommerce Sologomas SPA",
    description:
      "Tienda en línea diseñada para mostrar productos y facilitar la compra a los clientes",
    descriptionLong:
      "Un ecommerce es una plataforma digital enfocada en la venta de productos o servicios de una empresa. Estos sitios permiten a los usuarios explorar catálogos, agregar productos al carrito y realizar compras en línea de forma segura. Además, suelen incluir información sobre la marca, políticas de envío y devolución, métodos de pago y soporte al cliente para mejorar la experiencia de compra.",
    img: sologomas,
    technology: "Alpine.js, Vite, Tailwind, Woocommerce, Wordpress.",
    statepj: "Finalizado",
    yearpj: "2024",
    linkRepo: "https://github.com/Keinnerross/sologomas-web",
    linkDemo: "https://sologomas.cl/",
    category: "web",
  },
  // {
  //   title: "API Rest + website Sologomas SPA",
  //   description:
  //     "construcción de API Rest para un sistema de cotización y visualización de inventario.",
  //   descriptionLong:
  //     'SoloGomas es una empresa dedicada a la distribución de correas automotrices. Para mantener un control eficiente de su inventario y garantizar suficientes correas disponibles, he desarrollado un sistema de control de inventario a medida. Este sistema utiliza una "API" y una base de datos para permitir que diferentes sistemas y aplicaciones se puedan comunicar entre sí y compartan información. Por ejemplo, si un cliente realiza un pedido de correas a través de la tienda en línea de SoloGomas, el sistema de control de inventario se actualizará automáticamente para reflejar el cambio en el nivel de stock.',
  //   img: apirest,

  //   technology: "Node, Express, MySQL, Next.js",
  //   statepj: "Finalizado",
  //   yearpj: "2022",
  //   linkRepo: "https://github.com/Keinnerross/api_sologomas",
  //   linkDemo: "https://keinnerross.github.io/sologomas-web/",
  //   category: "web",
  // },
{
    title: "Rate My Session",
  description: "Plataforma web para calificar y reseñar terapeutas.",
   descriptionLong: "Una plataforma digital creada para que los usuarios puedan calificar, reseñar y compartir experiencias con terapeutas. Además de permitir valoraciones detalladas y reacciones a las reseñas, el sistema integra inteligencia artificial mediante Gemini para generar resúmenes automáticos de las opiniones y destacar los puntos más relevantes de cada terapeuta. El objetivo es fomentar la transparencia, construir confianza y ofrecer una comunidad donde las personas puedan descubrir y evaluar profesionales de la salud mental con base en información real y verificable.",
    img: rms,
    technology: "Next.js, Tailwind, WordPress Headless.",
    statepj: "Finalizado",
    yearpj: "2024",
    linkRepo: "#",
    linkDemo: "https://ratemysession-front.vercel.app/",
    category: "web",
  },
  {
    title: "ChatBot RedLion ",
    category: "web",
    img: redlion,
    description:
      "Desarrollé un chatbot para Redlion con Node.js y Baileys, que gestiona citas y cotizaciones a través de WhatsApp.",
    descriptionLong: `
    Desarrollé un chatbot avanzado para este estudio de tatuajes, diseñado para optimizar la programación de citas y la solicitud de cotizaciones. Utilizando Node.js y la librería Baileys para la integración con WhatsApp, el chatbot permite a los usuarios gestionar sus citas y obtener cotizaciones a través de una serie de preguntas directas. Este sistema automatizado no solo facilita la reserva de fechas y la solicitud de precios, sino que también mejora la eficiencia operativa del estudio al reducir la carga de trabajo del personal y ofrecer una experiencia de usuario fluida y continua.
`,
    yearpj: "2023",
    technology: "Node, Baileys, Docker.",
    statepj: "Finalizado",
    linkDemo:
      "#",
    linkRepo: "https://github.com/Keinnerross/bot_redlion",
  },

  {
    title: "FileRead Home Page ",
    description:
      "Sitio web desarrollado en Framer a partir de un diseño en Figma, enfocado en animaciones y precisión visual.",
    descriptionLong:
      "Proyecto desarrollado en Framer basado en un diseño original de Figma, con especial atención en la fluidez de las animaciones, la precisión en la interfaz de usuario y la adaptación total a diferentes dispositivos. El enfoque principal fue lograr una experiencia moderna, interactiva y visualmente consistente con el diseño propuesto.",
    img: fileread,
    technology: "Figma, Framer.",
    statepj: "Finalizado",
    yearpj: "2025",
    category: "front",
    linkRepo: "#",
    linkDemo: "https://fileread.com/",
  },

  {
    title: "QuenClima",
    img: quenclima,
    description:
      "Sitio web profesional para un taller automotriz, diseñado para atraer clientes y mostrar servicios.",
    descriptionLong:
      "Un sitio web profesional para un taller automotriz sirve como vitrina digital para mostrar los servicios, trabajos realizados y datos de contacto del negocio. Permite a los clientes agendar citas, conocer promociones, ver reseñas y obtener información clara sobre mantenimiento, reparaciones y otros servicios del taller, generando confianza y presencia online.",

    yearpj: "2024",
    technology: "Php, Tailwind, Wordpress",
    statepj: "Finalizado",
    category: "CMS/Wordpress",
    linkRepo: "#",
    linkDemo: "https://quenclima.cl/",
  },

  {
    title: "Módulo Super Mario",
    category: "module",
    img: mario,

    description:
      "Diseñé un módulo interactivo que permite a los usuarios controlar a Super Mario y hacerlo saltar sobre un bloque de texto.",

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
