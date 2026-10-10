import type { IconType } from "react-icons";
import { FaShieldAlt, FaFileSignature, FaCar, FaCode } from "react-icons/fa";

export interface Solution {
  /** Valor que usa el formulario de contacto y el backend */
  id: "riesgo-logistico" | "tfirma" | "conducir" | "software";
  path: string;
  number: string;
  name: string;
  category: string;
  icon: IconType;
  /** Texto corto para la tarjeta de la portada */
  summary: string;
  seo: { title: string; description: string; keywords: string[] };
  /** Título principal (h1) de la página */
  headline: string;
  lead: string;
  problem: { title: string; text: string };
  features: { title: string; text: string }[];
  audience: string[];
  faqs: { question: string; answer: string }[];
  /** Se muestra en la grilla de productos de la portada */
  featured: boolean;
}

export const solutions: Solution[] = [
  {
    id: "riesgo-logistico",
    path: "/soluciones/riesgo-logistico/",
    number: "01",
    name: "Riesgo Logístico",
    category: "GESTIÓN Y SEGURIDAD",
    icon: FaShieldAlt,
    summary:
      "Plataforma inteligente para la gestión y prevención del riesgo logístico. Automatiza procesos, centraliza información y facilita la toma de decisiones para una operación más segura y eficiente.",
    seo: {
      title: "Riesgo Logístico | Software de gestión del riesgo logístico",
      description:
        "Plataforma para gestionar y prevenir el riesgo logístico: automatiza procesos, centraliza la información y apoya la toma de decisiones en operaciones de transporte.",
      keywords: [
        "software de gestión de riesgo logístico",
        "prevención de riesgo en transporte de carga",
        "seguridad logística",
      ],
    },
    headline: "Software para la gestión y prevención del riesgo logístico",
    lead: "Riesgo Logístico es una plataforma inteligente que automatiza procesos, centraliza la información de la operación y facilita la toma de decisiones para que tu cadena logística sea más segura y eficiente.",
    problem: {
      title: "Una operación logística segura empieza con información confiable",
      text: "Cuando los datos de la operación están dispersos entre hojas de cálculo, correos y sistemas aislados, identificar a tiempo un riesgo es difícil y cada decisión toma más de lo necesario. Riesgo Logístico reúne esa información en un solo lugar y automatiza las tareas repetitivas para que tu equipo se enfoque en prevenir.",
    },
    features: [
      {
        title: "Información centralizada",
        text: "Toda la información relevante de la operación disponible en una única plataforma, siempre actualizada.",
      },
      {
        title: "Procesos automatizados",
        text: "Automatiza tareas operativas repetitivas y reduce los errores asociados al trabajo manual.",
      },
      {
        title: "Toma de decisiones informada",
        text: "Datos organizados para evaluar el riesgo y decidir con mayor rapidez y criterio.",
      },
      {
        title: "Enfoque preventivo",
        text: "Herramientas pensadas para anticiparse a los riesgos y no solo reaccionar ante ellos.",
      },
    ],
    audience: [
      "Empresas de transporte de carga",
      "Operadores logísticos",
      "Generadores de carga",
      "Aseguradoras",
    ],
    faqs: [
      {
        question: "¿Qué es la gestión del riesgo logístico?",
        answer:
          "Es el conjunto de prácticas para identificar, evaluar y prevenir los eventos que pueden afectar una operación de transporte y almacenamiento, como pérdidas, retrasos o incidentes de seguridad.",
      },
      {
        question: "¿Para qué tipo de empresas es Riesgo Logístico?",
        answer:
          "Para organizaciones que mueven o aseguran carga: transportadoras, operadores logísticos, generadores de carga y aseguradoras que necesitan controlar el riesgo de su operación.",
      },
      {
        question: "¿Cómo puedo conocer la plataforma?",
        answer:
          "Escríbenos desde el formulario de contacto y agendamos una asesoría para revisar tu operación y mostrarte cómo se adapta la plataforma.",
      },
    ],
    featured: true,
  },
  {
    id: "tfirma",
    path: "/soluciones/tfirma/",
    number: "02",
    name: "TFirma",
    category: "GESTIÓN DOCUMENTAL",
    icon: FaFileSignature,
    summary:
      "Plataforma dinámica de firma electrónica que simplifica y automatiza la gestión documental. Permite firmar todo tipo de documentos legales de forma ágil, segura y electrónica.",
    seo: {
      title: "TFirma | Firma electrónica de documentos en Colombia",
      description:
        "TFirma es la plataforma de firma electrónica de Tecnología Funcional: firma documentos legales en línea de forma ágil y segura y automatiza tu gestión documental.",
      keywords: [
        "firma electrónica Colombia",
        "firmar documentos en línea",
        "plataforma de firma electrónica",
        "gestión documental",
      ],
    },
    headline: "Firma electrónica de documentos, ágil y segura",
    lead: "TFirma es una plataforma dinámica de firma electrónica que simplifica y automatiza la gestión documental. Firma todo tipo de documentos legales sin imprimir, escanear ni desplazarte.",
    problem: {
      title: "Menos papel, menos tiempo, más control",
      text: "Imprimir, firmar a mano, escanear y enviar documentos retrasa los procesos y hace difícil saber en qué estado está cada trámite. TFirma lleva ese flujo a un entorno digital para que los documentos se firmen en minutos y la gestión documental sea más ordenada.",
    },
    features: [
      {
        title: "Firma electrónica",
        text: "Firma documentos legales de forma electrónica, desde cualquier lugar.",
      },
      {
        title: "Gestión documental automatizada",
        text: "Simplifica y automatiza el ciclo de los documentos dentro de tu organización.",
      },
      {
        title: "Agilidad",
        text: "Reduce los tiempos de firma y elimina los pasos de impresión y escaneo.",
      },
      {
        title: "Seguridad",
        text: "Un proceso de firma electrónico y seguro para documentos importantes.",
      },
    ],
    audience: [
      "Áreas de recursos humanos",
      "Áreas jurídicas y comerciales",
      "Entidades financieras y aseguradoras",
      "Empresas de servicios",
    ],
    faqs: [
      {
        question: "¿La firma electrónica tiene validez en Colombia?",
        answer:
          "Sí. La Ley 527 de 1999 y el Decreto 2364 de 2012 (hoy compilado en el Decreto 1074 de 2015) reconocen la validez jurídica de la firma electrónica cuando el método utilizado es confiable y apropiado para el propósito del documento.",
      },
      {
        question: "¿Qué documentos se pueden firmar con TFirma?",
        answer:
          "TFirma está pensada para firmar todo tipo de documentos legales, como contratos, acuerdos y documentos internos de la organización.",
      },
      {
        question: "¿Cómo empiezo a usar TFirma?",
        answer:
          "Solicita una asesoría desde el formulario de contacto y te acompañamos en la configuración según los documentos y procesos de tu empresa.",
      },
    ],
    featured: true,
  },
  {
    id: "conducir",
    path: "/soluciones/conducir/",
    number: "03",
    name: "Conducir",
    category: "MOVILIDAD Y BENEFICIOS",
    icon: FaCar,
    summary:
      "Club de beneficios para propietarios de vehículos que convierte sus compras en beneficios inmediatos. Genera trazabilidad de las compras en tiempo real y permite obtener beneficios monetizables al instante.",
    seo: {
      title: "Conducir | Club de beneficios para propietarios de vehículos",
      description:
        "Conducir es un club de beneficios para propietarios de vehículos que convierte sus compras en beneficios inmediatos, con trazabilidad en tiempo real.",
      keywords: [
        "club de beneficios para conductores",
        "beneficios para propietarios de vehículos",
        "programa de beneficios vehicular",
      ],
    },
    headline: "Club de beneficios para propietarios de vehículos",
    lead: "Conducir convierte las compras de los propietarios de vehículos en beneficios inmediatos. Cada compra queda registrada en tiempo real y los beneficios se pueden aprovechar al instante.",
    problem: {
      title: "Cada compra relacionada con tu vehículo puede devolverte valor",
      text: "Los propietarios de vehículos hacen compras frecuentes, pero rara vez reciben algo a cambio de forma inmediata. Conducir agrupa esas compras en un club de beneficios con trazabilidad en tiempo real, para que el beneficio sea tangible desde el primer momento.",
    },
    features: [
      {
        title: "Beneficios inmediatos",
        text: "Las compras se convierten en beneficios que se reciben al instante.",
      },
      {
        title: "Trazabilidad en tiempo real",
        text: "Cada compra queda registrada y se puede consultar en el momento.",
      },
      {
        title: "Beneficios monetizables",
        text: "Los beneficios obtenidos tienen valor real y se pueden aprovechar de inmediato.",
      },
    ],
    audience: [
      "Propietarios de vehículos",
      "Comercios y aliados del sector automotor",
      "Empresas con flotas",
    ],
    faqs: [
      {
        question: "¿Qué es Conducir?",
        answer:
          "Es un club de beneficios para propietarios de vehículos que transforma sus compras en beneficios inmediatos y monetizables.",
      },
      {
        question: "¿Cómo se registran las compras?",
        answer:
          "La plataforma genera trazabilidad de las compras en tiempo real, de modo que cada compra queda registrada al momento.",
      },
      {
        question: "¿Cómo puedo unirme o ser aliado?",
        answer:
          "Escríbenos desde el formulario de contacto y te contamos cómo participar en el club.",
      },
    ],
    featured: true,
  },
  {
    id: "software",
    path: "/desarrollo-a-medida/",
    number: "04",
    name: "Desarrollo a Medida",
    category: "SOFTWARE A LA MEDIDA",
    icon: FaCode,
    summary:
      "Diseñamos y construimos software a la medida de cada desafío: soluciones escalables que optimizan procesos y acompañan el crecimiento de tu organización.",
    seo: {
      title: "Software a la medida en Colombia | Tecnología Funcional",
      description:
        "Desarrollamos software a la medida para empresas en Colombia: soluciones digitales escalables que optimizan procesos y convierten desafíos complejos en resultados.",
      keywords: [
        "desarrollo de software a la medida",
        "empresa de desarrollo de software Colombia",
        "soluciones digitales para empresas",
      ],
    },
    headline: "Desarrollo de software a la medida",
    lead: "Combinamos innovación, experiencia y visión de futuro para crear soluciones digitales a la medida de cada desafío. Entendemos lo complejo, lo convertimos en tecnología y lo hacemos posible.",
    problem: {
      title: "Cuando el software genérico no se ajusta a tu operación",
      text: "Cada organización tiene procesos propios. Cuando las herramientas genéricas obligan a adaptar la operación a ellas, se pierden tiempo y oportunidades. Construimos tecnología que se adapta a tu negocio y evoluciona con él.",
    },
    features: [
      {
        title: "Soluciones escalables",
        text: "Software pensado para crecer al ritmo de tu organización.",
      },
      {
        title: "Optimización de procesos",
        text: "Automatizamos y digitalizamos procesos para que tu equipo gane eficiencia.",
      },
      {
        title: "Acompañamiento cercano",
        text: "Entendemos tu necesidad antes de proponer la solución y te acompañamos en su evolución.",
      },
    ],
    audience: [
      "Logística y transporte",
      "Recursos humanos",
      "Finanzas",
      "Comercio electrónico",
      "Servicios",
      "Aseguradoras",
    ],
    faqs: [
      {
        question: "¿Qué tipo de software desarrollan?",
        answer:
          "Soluciones digitales a la medida para empresas: plataformas y aplicaciones que automatizan procesos y resuelven necesidades específicas de cada organización.",
      },
      {
        question: "¿En qué sectores tienen experiencia?",
        answer:
          "Logística, transporte, recursos humanos, finanzas, comercio electrónico, servicios y aseguradoras.",
      },
      {
        question: "¿Cómo empezamos un proyecto?",
        answer:
          "Cuéntanos tu necesidad en el formulario de contacto. Agendamos una asesoría para entender el desafío y proponerte el camino a seguir.",
      },
    ],
    featured: false,
  },
];

export const featuredSolutions = solutions.filter((s) => s.featured);
