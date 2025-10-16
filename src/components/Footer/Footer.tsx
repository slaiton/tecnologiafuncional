// import React from "react";
import { FaEnvelope } from "react-icons/fa";
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
        <iframe
          title="Google Maps Location"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7952.978046328649!2d-74.046699!3d4.684742000000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a966cd4ac4b%3A0x99b561508fcced8f!2sCra.%2014%20%23100-19%2C%20Bogot%C3%A1%2C%20Colombia!5e0!3m2!1ses-419!2sus!4v1741886761633!5m2!1ses-419!2sus"
          width="500"
          height="200"
          style={{
            border: "0px",
            width: "100%",
            maxWidth: "500px",
            minWidth: "auto",
          }}
          loading="lazy"
        ></iframe>
      </div>

      <div className="footer-contact">
        {/* <h3>Contacto</h3> */}
        <p><FaEnvelope className="icon" /> <a href="mailto:ejemplo@dominio.com">contacto@tecnologiafuncional.com</a></p>
  
      </div>


    </footer>
  );
};

export default Footer;