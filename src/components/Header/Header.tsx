import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [showHeader, setShowHeader] = useState(false);
    const [activeSection, setActiveSection] = useState<string>("home");

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 100) {
            setShowHeader(true);
          } else {
            setShowHeader(false);
          }
    
          // Detecta la sección visible en pantalla
          const sections = document.querySelectorAll("section");
          sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 150 && rect.bottom >= 150) {
              setActiveSection(section.id);
            }
          });
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
      setIsOpen(false); // Cierra el menú en móvil
    }
  };

//   const navigate = useNavigate();

  return (
    <header
    className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      showHeader ? "bg-gray-900 bg-opacity-60 shadow-md" : "bg-transparent"
    }`}
  >
    <div className="container mx-auto px-6 py-4 flex items-center">
      
      {/* Logo (Siempre Visible) */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mr-6 cursor-pointer"
        onClick={() => scrollToSection("home")}
      >
        <img src="/tf.png" alt="Logo" width="60px" height="60px" className="opacity-100" />
      </motion.div>

      {/* Menú visible cuando showHeader es true */}
      {showHeader && (
         <motion.nav
         initial={{ opacity: 0, y: -20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5 }}
         className="hidden md:flex ml-auto gap-10 text-lg text-white"
       >
         <a
           className={`cursor-pointer relative transition-opacity hover:opacity-80 ${
             activeSection === "home" ? "after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-red-400" : ""
           }`}
           onClick={() => scrollToSection("home")}
         >
           Inicio
         </a>
         <a
           className={`cursor-pointer relative transition-opacity hover:opacity-80 ${
             activeSection === "services" ? "after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-red-400" : ""
           }`}
           onClick={() => scrollToSection("services")}
         >
           Servicios
         </a>

         <a
           className={`cursor-pointer relative transition-opacity hover:opacity-80 ${
             activeSection === "contact" ? "after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-red-400" : ""
           }`}
           onClick={() => scrollToSection("contact")}
         >
           Contacto
         </a>
       </motion.nav>
      )}

      {/* Botón Menú Móvil */}
      {showHeader && (
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden ml-auto">
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      )}

      {/* Menú Móvil Desplegable */}
      {isOpen && showHeader && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-16 left-0 w-full bg-gray-900 bg-opacity-60 p-6 flex flex-col gap-4 items-center md:hidden"
          >
            <a className="cursor-pointer text-white text-lg hover:text-red-400" onClick={() => scrollToSection("home")}>
              Inicio
            </a>
            <a className="cursor-pointer text-white text-lg hover:text-red-400" onClick={() => scrollToSection("services")}>
              Servicios
            </a>
            <a className="cursor-pointer text-white text-lg hover:text-red-400" onClick={() => scrollToSection("contact")}>
              Contacto
            </a>
          </motion.div>
      )}
    </div>
  </header>
  );
}