import React from "react";
import { motion } from "framer-motion";
import "./About.css";

interface AboutProps {
  onNavigate: (section: string) => void;
}

const About: React.FC<AboutProps> = () => {
  return (
    <section id="about" className="about-section">
      {/* Brillos decorativos */}
      <div className="about-glow about-glow-one"></div>
      <div className="about-glow about-glow-two"></div>

      <div className="about-container">
        {/* =========================
            COLUMNA IZQUIERDA
        ========================= */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="about-left"
        >
          <span className="about-tag">
            <span className="about-tag-dot"></span>
            QUIÉNES SOMOS
          </span>

          <h2>
            Tecnología que
            <span> transforma </span>
            desafíos en oportunidades
          </h2>

          <div className="about-line"></div>

          <p className="about-intro">
            Somos una empresa colombiana de tecnología que combina innovación,
            experiencia y visión de futuro para crear soluciones digitales a la
            medida de cada desafío.
          </p>

          <p>
            Nos caracteriza la capacidad de entender lo complejo, convertirlo en
            tecnología y hacerlo posible.
          </p>

          <div className="about-highlight">
            <div className="highlight-number">
              <span>TF</span>
            </div>

            <div>
              <strong>Tecnología Funcional</strong>
              <p>Soluciones pensadas para generar resultados reales.</p>
            </div>
          </div>
        </motion.div>

        {/* =========================
            COLUMNA DERECHA
        ========================= */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="about-right"
        >
          {/* MISIÓN */}
          <motion.div
            className="about-card"
            whileHover={{ y: -6 }}
            transition={{ duration: 0.25 }}
          >
            <div className="card-number">01</div>

            <div className="card-content">
              <span className="card-label">PROPÓSITO</span>

              <h3>Misión</h3>

              <p>
                Convertimos ideas y desafíos en tecnología que transforma.
                Creamos soluciones inteligentes, escalables y de vanguardia que
                permiten a las organizaciones evolucionar, optimizar sus
                procesos y alcanzar nuevas posibilidades.
              </p>
            </div>
          </motion.div>

          {/* VISIÓN */}
          <motion.div
            className="about-card"
            whileHover={{ y: -6 }}
            transition={{ duration: 0.25 }}
          >
            <div className="card-number">02</div>

            <div className="card-content">
              <span className="card-label">FUTURO</span>

              <h3>Visión</h3>

              <p>
                Construir el futuro a través de la tecnología. Ser una compañía
                referente en innovación, reconocida por transformar industrias y
                crear soluciones que generan valor real para las empresas y las
                personas.
              </p>
            </div>
          </motion.div>

          {/* SECTORES */}
          <motion.div
            className="about-card about-sectors"
            whileHover={{ y: -6 }}
            transition={{ duration: 0.25 }}
          >
            <div className="card-number">03</div>

            <div className="card-content">
              <span className="card-label">EXPERIENCIA</span>

              <h3>Sectores</h3>

              <div className="sector-list">
                <span>Logística</span>
                <span>Transporte</span>
                <span>Recursos Humanos</span>
                <span>Finanzas</span>
                <span>Comercio Electrónico</span>
                <span>Servicios</span>
                <span>Aseguradoras</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
