import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { featuredSolutions, solutions } from "../../data/solutions";

import "./Services.css";

const customDevelopment = solutions.find((s) => s.id === "software");

const Services: React.FC = () => {
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
          {featuredSolutions.map((service, index) => (
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
              <div className="service-icon">
                <service.icon />
              </div>

              {/* Categoría */}
              <span className="service-category">{service.category}</span>

              {/* Título */}
              <h3>
                <Link to={service.path} className="service-card-link">
                  {service.name}
                </Link>
              </h3>

              {/* Descripción */}
              <p>{service.summary}</p>

              {/* Footer */}
              <div className="service-footer">
                <span>Conoce {service.name}</span>

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
            ¿Necesitas algo distinto?{" "}
            {customDevelopment && (
              <Link to={customDevelopment.path} className="services-bottom-link">
                Desarrollamos software a la medida
              </Link>
            )}
          </p>

          <span></span>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
