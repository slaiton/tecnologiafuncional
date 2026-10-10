import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { scrollToId } from "../../utils/scroll";
import "./Header.css";

const menuItems = [
  { id: "home", label: "Inicio" },
  { id: "about", label: "Nosotros" },
  { id: "services", label: "Soluciones" },
  { id: "contact", label: "Contacto" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = document.querySelectorAll("section");

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= 180 && rect.bottom >= 180) {
          setActiveSection(section.id);
        }
      });
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  // Si la sección está en la página actual, se desplaza; si no, el enlace
  // lleva a la portada con el ancla correspondiente.
  const handleNavClick = (event: React.MouseEvent, id: string) => {
    setIsOpen(false);

    if (scrollToId(id)) {
      event.preventDefault();
    }
  };

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      {/* LOGO FIJO */}
      <motion.div
        className="header-logo"
        initial={{ opacity: 0, scale: 0.8, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
      >
        <Link
          to="/"
          aria-label="Tecnología Funcional, ir al inicio"
          onClick={(event) => handleNavClick(event, "home")}
        >
          <img src="/tf.png" alt="Tecnología Funcional" width="62" height="62" />
        </Link>
      </motion.div>

      {/* NAVEGACIÓN DESKTOP */}
      <nav className="desktop-nav">
        {menuItems.map((item) => (
          <Link
            key={item.id}
            to={`/#${item.id}`}
            className={`nav-link ${activeSection === item.id ? "active" : ""}`}
            onClick={(event) => handleNavClick(event, item.id)}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* BOTÓN MOBILE */}
      <button
        type="button"
        className="mobile-menu-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* MENÚ MOBILE */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="mobile-nav"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
          >
            {menuItems.map((item) => (
              <Link
                key={item.id}
                to={`/#${item.id}`}
                className={`mobile-nav-link ${
                  activeSection === item.id ? "active" : ""
                }`}
                onClick={(event) => handleNavClick(event, item.id)}
              >
                {item.label}
              </Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
