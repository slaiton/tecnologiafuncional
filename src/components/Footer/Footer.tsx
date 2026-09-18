import { FaEnvelope, FaArrowUp } from "react-icons/fa";
import { TiSocialFacebook, TiSocialInstagram } from "react-icons/ti";

import "./Footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      {/* Brillos decorativos */}
      <div className="footer-glow footer-glow-one"></div>
      <div className="footer-glow footer-glow-two"></div>

      <div className="footer-container">
        {/* =================================
            PARTE SUPERIOR
        ================================= */}
        <div className="footer-main">
          {/* LOGO + DESCRIPCIÓN */}
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="/tf.png" alt="Tecnología Funcional" />
            </div>

            <div className="footer-brand-text">
              <h2>
                Tecnología <span>Funcional</span>
              </h2>

              <p>
                Transformamos desafíos complejos en soluciones tecnológicas
                eficientes, modernas y funcionales.
              </p>
            </div>
          </div>

          {/* CONTACTO */}
          <div className="footer-column">
            <span className="footer-column-title">CONTACTO</span>

            <a
              href="mailto:contacto@tecnologiafuncional.com"
              className="footer-contact-link"
            >
              <FaEnvelope />

              <span>contacto@tecnologiafuncional.com</span>
            </a>
          </div>

          {/* REDES */}
          <div className="footer-column">
            <span className="footer-column-title">SÍGUENOS</span>

            <div className="footer-socials">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="footer-social"
              >
                <TiSocialFacebook />
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="footer-social"
              >
                <TiSocialInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* =================================
            LÍNEA
        ================================= */}
        <div className="footer-divider"></div>

        {/* =================================
            PARTE INFERIOR
        ================================= */}
        <div className="footer-bottom">
          <div className="footer-rights">
            <p>© 2026 Tecnología Funcional</p>

            <span>Todos los derechos reservados.</span>
          </div>

          {/* VOLVER ARRIBA */}
          <button
            type="button"
            className="footer-top-button"
            onClick={scrollToTop}
            aria-label="Volver al inicio"
          >
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
