// import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer w-screen">
      <div className="footer-logo">
        <img src="/tf.png" alt="Logo App" />
      </div>

      {/* <div className="footer-nav">
        <h2 className="footer-title">Tecnologia Funcional</h2>
        <ul className="footer-links">
          <li><a href="/services">Servicios</a></li>
          <li><a href="/contact">Contacto</a></li>
        </ul>
      </div> */}


      <div className="footer-map">
      </div>

      {/*<div className="date">
        <p>© 2026 Tecnología Funcional. Todos los derechos reservados.</p>
      </div>
      */}
      
      <div className="footer-contact">
        {/* <h3>Contacto</h3> */}
        <p><FaEnvelope className="icon" /> <a href="mailto:ejemplo@dominio.com">contacto@tecnologiafuncional.com</a></p>
        <p><TiSocialFacebook className="icon" /> <a href="" target="_blank" rel="noopener noreferrer">Síguenos en Facebook</a></p>
        <p><TiSocialInstagram className="icon" /> <a href="" target="_blank" rel="noopener noreferrer">Síguenos en Instagram</a></p>
      </div>

    </footer>
  );
};

export default Footer;