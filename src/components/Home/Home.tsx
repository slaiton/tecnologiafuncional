import { motion } from "framer-motion";
import React from "react";
import "./Home.css";

interface HomeProps {
  onNavigate: (section: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="home">
      {/* VIDEO DE FONDO */}
      <motion.video
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4 }}
        className="home-video"
        src="/video2.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* OSCURECIMIENTO + COLOR */}
      <div className="home-overlay"></div>

      {/* LUCES DECORATIVAS */}
      <div className="home-glow home-glow-one"></div>
      <div className="home-glow home-glow-two"></div>

      {/* CONTENIDO */}
      <main className="home-content">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="home-badge"
        >
          <span className="home-badge-dot"></span>
          Soluciones digitales a medida
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="home-title"
        >
          Tecnología <span>Funcional</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="home-description"
        >
          Transformamos desafíos complejos en soluciones tecnológicas
          eficientes, modernas y diseñadas para impulsar tu negocio.
        </motion.p>

        {/* BOTONES */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="home-actions"
        >
          <button
            onClick={() => onNavigate("contact")}
            className="home-btn home-btn-primary"
          >
            Solicitar asesoría
            <span>→</span>
          </button>

          <button
            onClick={() => onNavigate("services")}
            className="home-btn home-btn-secondary"
          >
            Ver servicios
          </button>
        </motion.div>

        {/* TECNOLOGÍAS / CONCEPTOS */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="home-features"
        >
          <span>Desarrollo</span>
          <i></i>
          <span>Innovación</span>
          <i></i>
          <span>Optimización</span>
        </motion.div>
      </main>

      {/* INDICADOR DE SCROLL */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="home-scroll"
        onClick={() => onNavigate("services")}
      >
        <span>Explorar</span>

        <div className="home-scroll-icon">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
