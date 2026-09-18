import React from "react";
import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaFileSignature,
  FaCar,
  FaArrowRight,
} from "react-icons/fa";

import "./Services.css";

const services = [
  {
    id: 1,
    number: "01",
    title: "Riesgo Logístico",
    category: "GESTIÓN Y SEGURIDAD",
    icon: <FaShieldAlt />,
    description:
      "Plataforma inteligente para la gestión y prevención del riesgo logístico. Automatiza procesos, centraliza información y facilita la toma de decisiones para una operación más segura y eficiente.",
  },
  {
    id: 2,
    number: "02",
    title: "TFirma",
    category: "GESTIÓN DOCUMENTAL",
    icon: <FaFileSignature />,
    description:
      "Plataforma dinámica de firma electrónica que simplifica y automatiza la gestión documental. Permite firmar todo tipo de documentos legales de forma ágil, segura y electrónica.",
  },
  {
    id: 3,
    number: "03",
    title: "Conducir",
    category: "MOVILIDAD Y BENEFICIOS",
    icon: <FaCar />,
    description:
      "Club de beneficios para propietarios de vehículos que convierte sus compras en beneficios inmediatos. Genera trazabilidad de las compras en tiempo real y permite obtener beneficios monetizables al instante.",
  },
];

interface ServiceProps {
  onNavigate?: (section: string) => void;
}

const Services: React.FC<ServiceProps> = () => {
  return (
    <section id="services" className="services-section">
      {/* Fondos decorativos */}
      <div className="services-glow services-glow-one"></div>
      <div className="services-glow services-glow-two"></div>

      <div className="services-container">
        {/* =================================
            ENCABEZADO
        ================================= */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.25 }}
          className="services-header"
        >
          <span className="services-tag">
            <span className="services-tag-dot"></span>
            NUESTROS PRODUCTOS
          </span>

          <h2>
            Tecnología diseñada para
            <span> impulsar tu negocio</span>
          </h2>

          <p>
            Desarrollamos soluciones tecnológicas modernas, escalables y
            enfocadas en resolver necesidades reales de las organizaciones.
          </p>
        </motion.div>

        {/* =================================
            PRODUCTOS
        ================================= */}
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.65,
                delay: index * 0.12,
                ease: "easeOut",
              }}
              whileHover={{ y: -8 }}
              className="service-card"
            >
              {/* Número */}
              <div className="service-number">{service.number}</div>

              {/* Icono */}
              <div className="service-icon">{service.icon}</div>

              {/* Categoría */}
              <span className="service-category">{service.category}</span>

              {/* Título */}
              <h3>{service.title}</h3>

              {/* Descripción */}
              <p>{service.description}</p>

              {/* Footer */}
              <div className="service-footer">
                <span>Solución tecnológica</span>

                <div className="service-arrow">
                  <FaArrowRight />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* =================================
            PARTE INFERIOR
        ================================= */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="services-bottom"
        >
          <span></span>

          <p>
            Soluciones construidas para evolucionar junto a tu organización.
          </p>

          <span></span>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
