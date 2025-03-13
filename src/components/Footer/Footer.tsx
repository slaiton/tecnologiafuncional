// import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
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
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </div>

      <div className="footer-contact">
        {/* <h3>Contacto</h3> */}
        <p><FaEnvelope className="icon" /> <a href="mailto:ejemplo@dominio.com">cesar.pulido@tecnologiafuncional.com</a></p>
    <p><FaPhoneAlt className="icon" /> <a href="tel:+1234567890">+57 3118101300</a></p>
        <p>
          <FaMapMarkerAlt className="icon" />
          <a href="https://www.google.com/maps?ll=4.684742,-74.046699&z=16&t=m&hl=es-US&gl=US&mapclient=embed&q=Cra.+14+%23100-19+Bogot%C3%A1"
            target="_blank" rel="noopener noreferrer">
            Cra. 14 #100-19 Bogota, Colombia
          </a>
        </p>
      </div>


    </footer>
  );
};

export default Footer;