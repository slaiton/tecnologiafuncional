import { FaEnvelope, FaArrowUp } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import { Link } from "react-router-dom";
import { solutions } from "../../data/solutions";
import { CONTACT_EMAIL, SOCIAL_PROFILES } from "../../seo/seo";

import "./Footer.css";

// Para agregar una red: sumarla a SOCIAL_PROFILES (seo.ts) y aquí con su ícono
const socialLinks = [
  { label: "Facebook", url: SOCIAL_PROFILES.facebook, icon: <TiSocialFacebook /> },
];

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

          {/* SOLUCIONES */}
          <nav className="footer-column" aria-label="Soluciones">
            <span className="footer-column-title">SOLUCIONES</span>

            {solutions.map((solution) => (
              <Link
                key={solution.id}
                to={solution.path}
                className="footer-nav-link"
              >
                {solution.name}
              </Link>
            ))}
          </nav>

          {/* CONTACTO */}
          <div className="footer-column">
            <span className="footer-column-title">CONTACTO</span>

            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="footer-contact-link"
            >
              <FaEnvelope />

              <span>{CONTACT_EMAIL}</span>
            </a>
          </div>

          {/* REDES */}
          <div className="footer-column">
            <span className="footer-column-title">SÍGUENOS</span>

            <div className="footer-socials">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="footer-social"
                >
                  {social.icon}
                </a>
              ))}
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
