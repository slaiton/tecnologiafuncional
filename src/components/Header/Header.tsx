import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

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
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setIsOpen(false);
  };

  const menuItems = [
    { id: "home", label: "Inicio" },
    { id: "about", label: "Nosotros" },
    { id: "services", label: "Soluciones" },
    { id: "contact", label: "Contacto" },
  ];

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
        onClick={() => scrollToSection("home")}
      >
        <img src="/tf.png" alt="Tecnología Funcional" />
      </motion.div>

      {/* NAVEGACIÓN DESKTOP */}
      <nav className="desktop-nav">
        {menuItems.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`nav-link ${activeSection === item.id ? "active" : ""}`}
            onClick={() => scrollToSection(item.id)}
          >
            {item.label}
          </button>
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
              <button
                key={item.id}
                type="button"
                className={`mobile-nav-link ${
                  activeSection === item.id ? "active" : ""
                }`}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </button>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
